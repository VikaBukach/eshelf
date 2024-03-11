import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { CatalogProductList } from "../CatalogProductList/CatalogProductList";
import { CatalogFilter } from "../CatalogFilter/CatalogFilter";
import { CatalogSorting } from "../CatalogSorting/CatalogSorting";
import { setCheckboxesSettings } from "../../../store/slices/filterSettingsSlice";
import { createUrlFromFilterSettings } from "../../../utils/filter-url";

const CatalogLayout = ({ title, filterCriterias, pricePath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filterSettings = useSelector((state) => state.filterSettings.checkboxes);
  const priceBy = useSelector((state) => state.filterSettings.priceBy);
  const priceTo = useSelector((state) => state.filterSettings.priceTo);
  const minValue = useSelector((state) => state.filterSettings.minPrice);
  const maxValue = useSelector((state) => state.filterSettings.maxPrice);
  const isLoaded = useSelector((state) => state.page.isLoaded);

  const [allSettings, setAllSettings] = useState([]);


  const openFilter = () => {
    if (window.innerWidth < 1024) {
      document.querySelector(".filter").classList.toggle("filter--open");
      document.querySelector("body").classList.toggle("body-to-filter");
      document.querySelector(".catalog__shadow").classList.toggle("catalog__shadow--open");
      
    }
  };

  const checkCount = () => {
    let pricePlus;
    priceBy > minValue || priceTo < maxValue ? (pricePlus = 1) : (pricePlus = 0);
    return allSettings.length + pricePlus;
  };

  const deleteSetting = (event) => {
    const newFilterSettings = {};
    for (const setting in filterSettings) {
      newFilterSettings[setting] = filterSettings[setting].filter(
        (item) => item !== event.target.getAttribute("data-value")
      );
    }
    dispatch(setCheckboxesSettings(newFilterSettings));
  };

  const navigateToUrlWithSettings = () => {
      const url = `?${createUrlFromFilterSettings(filterSettings, priceBy, priceTo, minValue, maxValue)}`;
      navigate(url);
  };

  useEffect(() => {
    setAllSettings(Object.values(filterSettings).flat());
    navigateToUrlWithSettings();
  }, [filterSettings]);

  useEffect(() => {
    console.log(isLoaded);
  }, [isLoaded]);

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
