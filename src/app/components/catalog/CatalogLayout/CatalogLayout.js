import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// Components
import { CatalogProductList } from "../CatalogProductList/CatalogProductList";
import { CatalogFilter } from "../CatalogFilter/CatalogFilter";
import { CatalogSorting } from "../CatalogSorting/CatalogSorting";
import { CatalogPagination } from "../CatalogPagination/CatalogPagination";
import { Breadcrumbs } from "../../ui/Breadcrumbs/Breadcrumbs";
// Slices
import { setCheckboxesSettings, setPriceBy, setPriceTo } from "../../../store/slices/filterSettingsSlice";
import { setFilterSorting } from "../../../store/slices/filterSortingSlice";
import { loadPageOfProducts, setPagesToLoading } from "../../../store/slices/productsSlice";
import { addVariationsToFilterCriterias } from "../../../store/slices/filterSettingsSlice";
// Another
import { createFilterSettingsObjectFromUrl } from "../../../utils/filter-url";

const CatalogLayout = ({ categoryName, title, filterCriterias, pricePath }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const filterSettings = useSelector((state) => state.filterSettings.checkboxes);
  const priceBy = useSelector((state) => state.filterSettings.priceBy);
  const priceTo = useSelector((state) => state.filterSettings.priceTo);
  const minValue = useSelector((state) => state.filterSettings.minPrice);
  const maxValue = useSelector((state) => state.filterSettings.maxPrice);
  const cardsInAllFilteredProducts = useSelector((state) => state.filterSettings.cardsInAllFilteredProducts);

  const productsDataLength = useSelector((state) => state.products.productsDataLength);
  const products = useSelector((state) => state.products.data);
  const pageOfDB = useSelector((state) => state.products.pageOfDB);
  const pagesToLoading = useSelector((state) => state.products.pagesToLoading);
  const cardsOnPage = useSelector((state) => state.products.cardsOnPage);

  const fetchStatus = useSelector((state) => state.products.status);
  const loadingFilterSettingsStatus = useSelector((state) => state.filterSettings.status);

  const [allSettings, setAllSettings] = useState([]);
  const [visibleButton, setvisibleButton] = useState(true);

  // ДІЇ ПО КНОПКАХ

  // Відкрити фільтр
  const openFilter = () => {
    if (window.innerWidth < 1024) {
      document.querySelector(".filter").classList.toggle("filter--open");
      document.querySelector("body").classList.toggle("body-to-filter");
      document.querySelector(".catalog__shadow").classList.toggle("catalog__shadow--open");
    }
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
  };

  // Кружечок з кількістю фільтрів (мобільна версія)
  const checkCount = () => {
    let pricePlus;
    priceBy > minValue || priceTo < maxValue ? (pricePlus = 1) : (pricePlus = 0);
    return Object.values(filterSettings).flat().length + pricePlus;
  };

  // При ЗАВАНТАЖЕННІ сторінки, тобто, ОДИН раз
  useEffect(() => {
    if (location.search !== "") {
      const { filterCheckboxSettings, filterPriceSettings, sortingSettings } = createFilterSettingsObjectFromUrl(
        minValue,
        maxValue,
        location.search
      );

      if (sortingSettings) {
        dispatch(setFilterSorting(sortingSettings));
      }
      dispatch(setPriceBy(filterPriceSettings.priceBy));
      dispatch(setPriceTo(filterPriceSettings.priceTo));
      if (Object.keys(filterCheckboxSettings).length !== 0) {
        dispatch(setCheckboxesSettings(filterCheckboxSettings));
      }
    }

    dispatch(addVariationsToFilterCriterias({ collection: categoryName, filterCriterias: filterCriterias }));
  }, []);

  useEffect(() => {
    if (loadingFilterSettingsStatus === "succeeded") {
      dispatch(loadPageOfProducts({ collection: categoryName, page: 1, limit: 1 }));
    }
  }, [loadingFilterSettingsStatus]);

  useEffect(() => {
    if (fetchStatus === "succeeded") {
      const colorsInProducts = products.reduce((accumulator, product) => {
        return accumulator + product.colors.length;
      }, 0);

      if (
        (cardsOnPage * pagesToLoading > colorsInProducts &&
          (products.length <= productsDataLength || (productsDataLength === 0 && products.length > 0)) &&
          pageOfDB <= productsDataLength) ||
        (productsDataLength === 0 && pageOfDB > 0)
      ) {
        dispatch(loadPageOfProducts({ collection: categoryName, page: pageOfDB, limit: 1 }));
      }

      if (cardsInAllFilteredProducts === colorsInProducts) {
        setvisibleButton(false);
      } else {
        setvisibleButton(true);
      }
    }
  }, [fetchStatus]);

  const onClickLoadMore = () => {
    dispatch(setPagesToLoading(pagesToLoading + 1));
    dispatch(loadPageOfProducts({ collection: categoryName, page: pageOfDB, limit: 1 }));
  };

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
          <CatalogSorting className="catalog__head-line__sorting" />
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
        </ul>
      </div>
      <div className="catalog__body">
        <CatalogFilter categoryName={categoryName} filterCriterias={filterCriterias} pricePath={pricePath} />
        <div className="catalog__body__list">
          <CatalogProductList />
          {visibleButton ? <CatalogPagination onClickFunc={onClickLoadMore} /> : null}
        </div>
      </div>
    </div>
    </div>
  );
};

export { CatalogLayout };
