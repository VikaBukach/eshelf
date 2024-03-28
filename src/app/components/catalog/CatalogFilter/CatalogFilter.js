import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// Components
import { CatalogFilterItem } from "../CatalogFilterItem/CatalogFilterItem";
import { CatalogPriceFilter } from "../CatalogPriceFilter/CatalogPriceFilter";
import { Accordion } from "../../ui/Accordion/Accordion";
// Slices
import { setCheckboxesSettings, setPriceBy, setPriceTo } from "../../../store/slices/filterSettingsSlice";
import { setPagesToLoading } from "../../../store/slices/productsSlice";
import { loadOnePageOfProducts } from "../../../store/slices/productsSlice";
// Another
import { createUrlFromFilterSettings } from "../../../utils/filter-url";
import { getMinAndMaxPrices, fillTheFilter } from "../../../store/slices/filterSettingsSlice";
import { convertSettingsToMongoType } from "../../../helpers/catalog";

const CatalogFilter = ({ categoryName, filterCriterias, pricePath, changePricePromptFunction }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const screenWidth = window.innerWidth;

  // filterSettings
  const filterCriteriasWithTypes = useSelector((state) => state.filterSettings.filterCriteriasWithTypes);
  const filterSettings = useSelector((state) => state.filterSettings.checkboxes);
  const priceBy = useSelector((state) => state.filterSettings.priceBy);
  const priceTo = useSelector((state) => state.filterSettings.priceTo);
  // filterSorting
  const sortingMode = useSelector((state) => state.filterSorting.mode);
  //products
  const cardsOnPage = useSelector((state) => state.products.cardsOnPage);
  const fetchStatus = useSelector((state) => state.products.status);
  const products = useSelector((state) => state.products.data);
  const pagesToLoading = useSelector((state) => state.products.pagesToLoading);

  // Фільтр-посилання
  const navigateToUrlWithSettings = () => {
    const url = `?${createUrlFromFilterSettings(filterSettings, priceBy, priceTo, sortingMode)}`;
    navigate(url);
  };

  // Фільтр-посилання при ресеті
  const navigateToUrlWithSettingsOnReset = () => {
    const url = `?${createUrlFromFilterSettings([], 0, 0, sortingMode)}`;
    navigate(url);
  };

  // Закрити фільтр (мобільна і таблет-версії)
  const closeFilter = () => {
    if (window.innerWidth < 1024) {
      document.querySelector(".filter").classList.toggle("filter--open");
      document.querySelector("body").classList.toggle("body-to-filter");
      document.querySelector(".catalog__shadow").classList.toggle("catalog__shadow--open");
    }
  };

  // Запуск фільтру
  const filterActions = () => {
    dispatch(
      getMinAndMaxPrices({ collection: categoryName, filterSettings: convertSettingsToMongoType(filterSettings) })
    );
    dispatch(
      fillTheFilter({
        collection: categoryName,
        filterSettings: convertSettingsToMongoType(filterSettings),
        filterCriterias: filterCriterias,
        priceBy: priceBy,
        priceTo: priceTo,
      })
    );
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
    navigateToUrlWithSettings();
    changePricePromptFunction();
  };

  // Натиск кнопки SUBMIT
  const onFilterSubmit = () => {
    closeFilter();
    filterActions();
    navigateToUrlWithSettings();
  };

  // Натиск RESET
  const onResetSubmit = () => {
    dispatch(setPriceBy(0));
    dispatch(setPriceTo(0));
    dispatch(setCheckboxesSettings([]));
    closeFilter();

    dispatch(getMinAndMaxPrices({ collection: categoryName, filterSettings: [] }));
    dispatch(
      fillTheFilter({
        collection: categoryName,
        filterSettings: [],
        filterCriterias: filterCriterias,
        priceBy: 0,
        priceTo: 0,
      })
    );
    dispatch(
      loadOnePageOfProducts({
        collection: categoryName,
        filterSettings: [],
        priceBy: 0,
        priceTo: 0,
        limit: cardsOnPage,
        page: 1,
        sortingMode: sortingMode,
      })
    );
    if (pagesToLoading !== 1) {
      dispatch(setPagesToLoading(1));
    }
    navigateToUrlWithSettingsOnReset();
  };

  // Зберігання моду сортування у посиланні
  useEffect(() => {
    navigateToUrlWithSettings();
  }, [sortingMode]);

  // Фільтрація безпосередньо при натисканні чекбоксу для великих екранів
  useEffect(() => {
    if (fetchStatus === "succeeded" && products.length > 0 && screenWidth >= 1024) {
      filterActions();
      navigateToUrlWithSettings();
    }
  }, [filterSettings]);

  return (
    <div className="filter">
      <div className="filter__header">
        <img className="filter__header__img" src="../assets/icons/filter-dark.svg" alt="Icon" />
        <h1 className="filter__title">Filter</h1>
        <img className="filter__close-btn" src="../assets/icons/close.svg" alt="Close" onClick={closeFilter} />
      </div>
      <Accordion title="Price" content={<CatalogPriceFilter pricePath={pricePath} onClickFunction={filterActions} />} />
      {filterCriteriasWithTypes.map((criteria, index) => (
        <React.Fragment key={index}>
          <CatalogFilterItem filterTitle={criteria.title} checkBoxNames={criteria.types} criteriaPath={criteria.path} />
        </React.Fragment>
      ))}
      <div className="filter__buttons">
        <button onClick={onResetSubmit} type="button" className="filter__reset filter__btn">
          Reset
        </button>
        <button onClick={onFilterSubmit} type="button" className="filter__submit filter__btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export { CatalogFilter };
