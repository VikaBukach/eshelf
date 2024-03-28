import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// Components
import { CatalogFilterItem } from "../CatalogFilterItem/CatalogFilterItem";
import { CatalogPriceFilter } from "../CatalogPriceFilter/CatalogPriceFilter";
import { Accordion } from "../../ui/Accordion/Accordion";
// Slices
import { setCheckboxesSettings, setPriceBy, setPriceTo } from "../../../store/slices/filterSettingsSlice";
import { setPageOfDB, setPagesToLoading } from "../../../store/slices/productsSlice";
import { loadOnePageOfProducts } from "../../../store/slices/productsSlice";
// Another
import { createUrlFromFilterSettings } from "../../../utils/filter-url";
import { getMinAndMaxPrices, fillTheFilter } from "../../../store/slices/filterSettingsSlice";
import { convertSettingsToMongoType } from "../../../helpers/catalog";

const CatalogFilter = ({ categoryName, filterCriterias, pricePath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filterCriteriasWithTypes = useSelector((state) => state.filterSettings.filterCriteriasWithTypes);
  const filterSettings = useSelector((state) => state.filterSettings.checkboxes);
  const minValue = useSelector((state) => state.filterSettings.minPrice);
  const maxValue = useSelector((state) => state.filterSettings.maxPrice);
  const priceBy = useSelector((state) => state.filterSettings.priceBy);
  const priceTo = useSelector((state) => state.filterSettings.priceTo);
  const checkedSortingValue = useSelector((state) => state.filterSorting.mode);
  const cardsOnPage = useSelector((state) => state.products.cardsOnPage);
  const sortingMode = useSelector((state) => state.filterSorting.mode);

  // Прибираємо розділювальну риску на останнтому елементі
  const accordions = document.querySelectorAll(".filter .accordion");
  if (accordions.length > 1) {
    accordions[accordions.length - 1].style.borderBottom = "0px";
    accordions[accordions.length - 1].style.marginBottom = "0px";
  }

  // Фільтр-посилання при ресеті
  const navigateToUrlWithSettingsOnReset = () => {
    const url = `?${createUrlFromFilterSettings([], 0, 0, 0, 0, checkedSortingValue)}`;
    navigate(url);
  };

  // Фільтр-посилання
  const navigateToUrlWithSettings = () => {
    const url = `?${createUrlFromFilterSettings(filterSettings, priceBy, priceTo, minValue, maxValue, checkedSortingValue)}`;
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

  // ДІЇ ПО КНОПКАХ

  // Запуск базового фільтру
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
    dispatch(setPagesToLoading(1));
  };

  const onFilterSubmit = () => {
    filterActions();
    closeFilter();
    navigateToUrlWithSettings();
  };

  useEffect(() => {
    navigateToUrlWithSettings();
  }, [sortingMode]);

  useEffect(() => {
    filterActions();
    navigateToUrlWithSettings();
  }, [filterSettings]);

  // Натиск RESET
  const onResetSubmit = () => {
    dispatch(setPriceBy(0));
    dispatch(setPriceTo(0));
    dispatch(setPagesToLoading(1));
    dispatch(setCheckboxesSettings([]));
    closeFilter();
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
    navigateToUrlWithSettingsOnReset();
  };

  return (
    <div className="filter">
      <div className="filter__header">
        <img className="filter__header__img" src="../assets/icons/filter-dark.svg" alt="Icon" />
        <h1 className="filter__title">Filter</h1>
        <img className="filter__close-btn" src="../assets/icons/close.svg" alt="Close" onClick={closeFilter} />
      </div>
      <Accordion
        title="Price"
        content={<CatalogPriceFilter pricePath={pricePath} onClickFunction={onFilterSubmit} />}
      />
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
