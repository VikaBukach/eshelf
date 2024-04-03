import React, { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// Components
import { CatalogProductList } from "../CatalogProductList/CatalogProductList";
import { CatalogFilter } from "../CatalogFilter/CatalogFilter";
import { CatalogSorting } from "../CatalogSorting/CatalogSorting";
import { CatalogPagination } from "../CatalogPagination/CatalogPagination";
import { Breadcrumbs } from "../../ui/Breadcrumbs/Breadcrumbs";
// Slices
import {
  setCheckboxesSettings,
  setPriceBy,
  setPriceTo,
  getMinAndMaxPrices,
  fillTheFilter,
} from "../../../store/slices/filterSettingsSlice";
import { setFilterSorting } from "../../../store/slices/filterSortingSlice";
import { setPagesToLoading, loadOnePageOfProducts } from "../../../store/slices/productsSlice";
// Another
import { createFilterSettingsObjectFromUrl, createUrlFromFilterSettings } from "../../../utils/filter-url";
import { convertSettingsToMongoType } from "../../../helpers/catalog";

const CatalogLayout = ({ categoryName, title, filterCriterias, pricePath }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // filterSettings
  const filterSettings = useSelector((state) => state.filterSettings.checkboxes);
  const priceBy = useSelector((state) => state.filterSettings.priceBy);
  const priceTo = useSelector((state) => state.filterSettings.priceTo);
  //products
  const pagesToLoading = useSelector((state) => state.products.pagesToLoading);
  const numberOfPages = useSelector((state) => state.products.numberOfPages);
  const cardsOnPage = useSelector((state) => state.products.cardsOnPage);
  //filterSorting
  const sortingMode = useSelector((state) => state.filterSorting.mode);

  const [allSettings, setAllSettings] = useState([]);
  const [priceByPrompt, setPriceByPrompt] = useState(0);
  const [priceToPrompt, setPriceToPrompt] = useState(0);

  // Відкрити фільтр
  const openFilter = () => {
    if (window.innerWidth < 1024) {
      document.querySelector(".filter").classList.toggle("filter--open");
      document.querySelector("body").classList.toggle("body-to-filter");
      document.querySelector(".catalog__shadow").classList.toggle("catalog__shadow--open");
    }
  };

  // Кружечок з кількістю фільтрів (мобільна версія)
  const checkCount = () => {
    let pricePlus;
    priceBy > 0 || priceTo > 0 ? (pricePlus = 1) : (pricePlus = 0);
    return Object.values(filterSettings).flat().length + pricePlus;
  };

  // Видалити критерій фільтру (таблет версія)
  const deleteSetting = (event) => {
    const newFilterSettings = {};
    for (const setting in filterSettings) {
      newFilterSettings[setting] = filterSettings[setting].filter(
        (item) => item !== event.target.getAttribute("data-value")
      );
    }
    dispatch(setCheckboxesSettings(newFilterSettings));

    dispatch(
      getMinAndMaxPrices({ collection: categoryName, filterSettings: convertSettingsToMongoType(newFilterSettings) })
    );
    dispatch(
      fillTheFilter({
        collection: categoryName,
        filterSettings: convertSettingsToMongoType(newFilterSettings),
        filterCriterias: filterCriterias,
        priceBy: priceBy,
        priceTo: priceTo,
      })
    );
    dispatch(
      loadOnePageOfProducts({
        collection: categoryName,
        filterSettings: convertSettingsToMongoType(newFilterSettings),
        priceBy: priceBy,
        priceTo: priceTo,
        limit: cardsOnPage,
        page: 1,
        sortingMode: sortingMode,
      })
    );

    if (pagesToLoading !== 1) {
      dispatch(setPagesToLoading(1));
    }

    const url = `?${createUrlFromFilterSettings(newFilterSettings, priceBy, priceTo, sortingMode)}`;
    navigate(url);
  };

  // Натиск кнопки пагінації
  const onClickLoadMore = () => {
    dispatch(
      loadOnePageOfProducts({
        collection: categoryName,
        filterSettings: convertSettingsToMongoType(filterSettings),
        priceBy: priceBy,
        priceTo: priceTo,
        limit: cardsOnPage,
        page: pagesToLoading + 1,
        sortingMode: sortingMode,
      })
    );
    dispatch(setPagesToLoading(pagesToLoading + 1));
  };

  // Дії при зміні моду сортування
  const renewLoadedProducts = (sortingMode) => {
    dispatch(
      loadOnePageOfProducts({
        collection: categoryName,
        filterSettings: convertSettingsToMongoType(filterSettings),
        priceBy: priceBy,
        priceTo: priceTo,
        limit: cardsOnPage,
        page: 1,
        sortingMode: sortingMode,
      })
    );
    if (pagesToLoading !== 1) {
      dispatch(setPagesToLoading(1));
    }
  };

  // Зміна підказок при зміні ціни
  const changePricePrompt = useMemo(() => {
    return () => {
      setPriceByPrompt(priceBy);
      setPriceToPrompt(priceTo);
    };
  }, [priceBy, priceTo]);

  const deletePricePrompt = useMemo(() => {
    return (priceType) => {
      const newPriceBy = priceType === "by" ? 0 : priceBy;
      const newPriceTo = priceType === "to" ? 0 : priceTo;

      setPriceByPrompt(newPriceBy);
      setPriceToPrompt(newPriceTo);

      dispatch(setPriceBy(newPriceBy));
      dispatch(setPriceTo(newPriceTo));

      dispatch(
        fillTheFilter({
          collection: categoryName,
          filterSettings: convertSettingsToMongoType(filterSettings),
          filterCriterias: filterCriterias,
          priceBy: newPriceBy,
          priceTo: newPriceTo,
        })
      );
      dispatch(
        loadOnePageOfProducts({
          collection: categoryName,
          filterSettings: convertSettingsToMongoType(filterSettings),
          priceBy: newPriceBy,
          priceTo: newPriceTo,
          limit: cardsOnPage,
          page: 1,
          sortingMode: sortingMode,
        })
      );
      if (pagesToLoading !== 1) {
        dispatch(setPagesToLoading(1));
      }
      const url = `?${createUrlFromFilterSettings(filterSettings, newPriceBy, newPriceTo, sortingMode)}`;
      navigate(url);
    };
  }, [priceBy, priceTo, categoryName, filterSettings, filterCriterias, cardsOnPage, pagesToLoading, sortingMode]);

  // Дії при ЗАВАНТАЖЕННІ сторінки
  useEffect(() => {
    const { filterCheckboxSettings, filterPriceSettings, sortingSettings } = createFilterSettingsObjectFromUrl(
      location.search
    );

    dispatch(setCheckboxesSettings(filterCheckboxSettings));
    dispatch(setPriceBy(filterPriceSettings.priceBy));
    dispatch(setPriceTo(filterPriceSettings.priceTo));
    dispatch(setFilterSorting(sortingSettings));
    setPriceByPrompt(filterPriceSettings.priceBy);
    setPriceToPrompt(filterPriceSettings.priceTo);

    dispatch(
      getMinAndMaxPrices({
        collection: categoryName,
        filterSettings: convertSettingsToMongoType(filterCheckboxSettings),
      })
    );
    dispatch(
      fillTheFilter({
        collection: categoryName,
        filterSettings: convertSettingsToMongoType(filterCheckboxSettings),
        filterCriterias: filterCriterias,
        priceBy: filterPriceSettings.priceBy,
        priceTo: filterPriceSettings.priceTo,
      })
    );
    dispatch(
      loadOnePageOfProducts({
        collection: categoryName,
        filterSettings: convertSettingsToMongoType(filterCheckboxSettings),
        priceBy: filterPriceSettings.priceBy,
        priceTo: filterPriceSettings.priceTo,
        limit: cardsOnPage,
        page: 1,
        sortingMode: sortingSettings,
      })
    );
    const url = `?${createUrlFromFilterSettings(filterCheckboxSettings, filterPriceSettings.priceBy, filterPriceSettings.priceTo, sortingSettings)}`;
    navigate(url);
  }, []);

  // Створення підказок з обраних чекбоксів
  useEffect(() => {
    setAllSettings(Object.values(filterSettings).flat());
  }, [filterSettings]);

  return (
    <div className="container">
      <div className="catalog">
        <div className="catalog__shadow"></div>
        <div className="catalog__head-line">
          <div className="catalog__head-line__head">
            <Breadcrumbs />
            <h3 className="catalog__head-line__title">{title}</h3>
          </div>
          <div className="catalog__head-line__container">
            <button className="catalog__head-line__filter-btn" type="button" onClick={openFilter}>
              <img className="catalog__head-line__filter-btn__img" src="../assets/icons/filter.svg" alt="Icon" />
              Filter
              <div className="catalog__head-line__filter-btn__count">{checkCount()}</div>
            </button>
            <CatalogSorting className="catalog__head-line__sorting" onChangeFunction={renewLoadedProducts} />
          </div>
          <ul className="catalog__filter-settings">
            {allSettings.map((setting, index) => (
              <li className="catalog__filter-settings__item" key={index}>
                {setting}
                <img
                  className="catalog__filter-settings__close"
                  src="../assets/icons/close2.svg"
                  alt="Icon"
                  data-value={setting}
                  onClick={deleteSetting}
                />
              </li>
            ))}
            {priceByPrompt !== 0 && (
              <li className="catalog__filter-settings__item" key={"pricebyitem"}>
                <span>By: ${priceByPrompt}</span>
                <img
                  className="catalog__filter-settings__close"
                  src="../assets/icons/close2.svg"
                  alt="Icon"
                  onClick={() => deletePricePrompt("by")}
                />
              </li>
            )}
            {priceToPrompt !== 0 && (
              <li className="catalog__filter-settings__item" key={"priceещitem"}>
                <span>To: ${priceToPrompt}</span>
                <img
                  className="catalog__filter-settings__close"
                  src="../assets/icons/close2.svg"
                  alt="Icon"
                  onClick={() => deletePricePrompt("to")}
                />
              </li>
            )}
          </ul>
        </div>
        <div className="catalog__body">
          <CatalogFilter
            categoryName={categoryName}
            filterCriterias={filterCriterias}
            pricePath={pricePath}
            changePricePromptFunction={changePricePrompt}
          />
          <div className="catalog__body__list">
            <CatalogProductList />
            {pagesToLoading !== numberOfPages && <CatalogPagination onClickFunc={onClickLoadMore} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export { CatalogLayout };
