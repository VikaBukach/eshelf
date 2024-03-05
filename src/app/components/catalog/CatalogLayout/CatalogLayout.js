import React from "react";
import { CatalogProductList } from "../CatalogProductList/CatalogProductList";
import { CatalogFilter } from "../CatalogFilter/CatalogFilter";
import { CatalogSorting } from "../CatalogSorting/CatalogSorting";
import Button from "../../Main/Button/Button";

const CatalogLayout = ({ title, filterCriterias, pricePath }) => {
  return (
    <div className="catalog">
      <div className="catalog__head-line">
        <p className="catalog__head-line__breadcrumb">˂ Breadcrumb</p>
        <h3 className="catalog__head-line__title">{title}</h3>
        <div className="catalog__head-line__container">
          <Button btnClass={"catalog__head-line__filter-btn"} onClick={console.log("Open Filter")} text={"Filter"} />
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
