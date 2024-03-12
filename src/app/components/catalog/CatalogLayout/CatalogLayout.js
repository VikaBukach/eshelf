import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CatalogProductList } from "../CatalogProductList/CatalogProductList";
import { CatalogFilter } from "../CatalogFilter/CatalogFilter";
import { CatalogSorting } from "../CatalogSorting/CatalogSorting";
import { setCheckboxesSettings } from "../../../store/slices/filterSettingsSlice";
import { setPriceBy, setPriceTo } from "../../../store/slices/filterSettingsSlice";
import { setFilterSorting } from "../../../store/slices/filterSortingSlice";
import { createFilterSettingsObjectFromUrl, createUrlFromFilterSettings } from "../../../utils/filter-url";
import { updateBaseFilterData } from "../../../store/slices/filteredProductsSlice";
import { updateFilteredProductsWithPrice } from "../../../store/slices/filteredProductsWithPriceSlice";
import { setProductsToResrtSorting } from "../../../store/slices/filterSortingSlice";

const CatalogLayout = ({ title, filterCriterias, pricePath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filterSettings = useSelector((state) => state.filterSettings.checkboxes);
  const products = useSelector((state) => state.products.data);
  const priceBy = useSelector((state) => state.filterSettings.priceBy);
  const priceTo = useSelector((state) => state.filterSettings.priceTo);
  const minValue = useSelector((state) => state.filterSettings.minPrice);
  const maxValue = useSelector((state) => state.filterSettings.maxPrice);
  const checkedSortingValue = useSelector((state) => state.filterSorting.mode);
  const fetchStatus = useSelector((state) => state.products.status);

  const [allSettings, setAllSettings] = useState([]);

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
    // dispatch(setCheckboxesSettings(newFilterSettings));
  };

  // ДОПОМІЖНІ ЕЛЕМЕНТИ

  // Кружечок з кількістю фільтрів (мобільна версія)
  const checkCount = () => {
    let pricePlus;
    priceBy > minValue || priceTo < maxValue ? (pricePlus = 1) : (pricePlus = 0);
    return allSettings.length + pricePlus;
  };

  // Фільтр-посилання
  const navigateToUrlWithSettings = () => {
    const url = `?${createUrlFromFilterSettings(filterSettings, priceBy, priceTo, minValue, maxValue, checkedSortingValue)}`;
    navigate(url);
  };

  // ЗМІНА СТАНІВ

  // При завантаженні товарів
  useEffect(() => {
    if (fetchStatus === "succeeded") {
      dispatch(updateBaseFilterData(products));
      dispatch(updateFilteredProductsWithPrice(products));
      dispatch(setProductsToResrtSorting(products));

      if (window.location.search !== "") {
        const { filterCheckboxSettings, filterPriceSettings, sortingSettings } = createFilterSettingsObjectFromUrl(
          minValue,
          maxValue
        );

        if (sortingSettings) {
          dispatch(setFilterSorting(sortingSettings));
        }
        if (filterPriceSettings.priceBy !== 0 && filterPriceSettings.priceTo !== 0) {
          dispatch(setPriceBy(filterPriceSettings.priceBy));
          dispatch(setPriceTo(filterPriceSettings.priceTo));
        }
        if (Object.keys(filterCheckboxSettings).length !== 0) {
          dispatch(setCheckboxesSettings(filterCheckboxSettings));
        }
      } else {
      }
    }
  }, [fetchStatus]);

  useEffect(() => {
    setAllSettings(Object.values(filterSettings).flat());
    if (filterSettings.length !== 0 || priceBy !== minValue || priceTo !== maxValue) {
      navigateToUrlWithSettings();
    }
  }, [filterSettings]);

  return (
    <div className="catalog">
      <div className="catalog__shadow"></div>
      <div className="catalog__head-line">
        <div className="catalog__head-line__head">
          <p className="catalog__head-line__breadcrumb">˂ Breadcrumb</p>
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
        <CatalogFilter filterCriterias={filterCriterias} pricePath={pricePath} />
        <CatalogProductList />
      </div>
    </div>
  );
};

export { CatalogLayout };
