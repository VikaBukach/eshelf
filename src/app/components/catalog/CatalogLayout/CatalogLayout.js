import React from "react";
import { CatalogProductList } from "../CatalogProductList/CatalogProductList";
import { CatalogFilter } from "../CatalogFilter/CatalogFilter";
import { CatalogSorting } from "../CatalogSorting/CatalogSorting";

const CatalogLayout = ({ title, filterCriterias, pricePath }) => {

  const openFilter = () => {
    document.querySelector(".filter").classList.toggle("filter--open");
    document.querySelector("body").classList.toggle("body-to-filter");
  };


  return (
    <div className="catalog">
      <div className="catalog__head-line">
        <p className="catalog__head-line__breadcrumb">˂ Breadcrumb</p>
        <h3 className="catalog__head-line__title">{title}</h3>
        <div className="catalog__head-line__container">
          <button className="catalog__head-line__filter-btn" type="button" onClick={openFilter}>
            <img className="catalog__head-line__filter-btn__img" src="../assets/icons/filter.svg" alt="Icon" />
            Filter
            <div className="catalog__head-line__filter-btn__count">3</div>
            </button>
          <CatalogSorting className="catalog__head-line__sorting" />
        </div>
      </div>
      <div className="catalog__body">
        <CatalogFilter filterCriterias={filterCriterias} pricePath={pricePath} />
        <CatalogProductList />
      </div>
    </div>
  );
};

export { CatalogLayout };
