import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilterSorting, setProductsToResrtSorting } from "../../../store/slices/filterSortingSlice";
import { findValueByPath } from "../../../helpers/catalog"
import { setFilteredProductsWithPrice } from "../../../store/slices/filteredProductsWithPriceSlice";
import { pageLoadedAction } from "../../../store/actions";

const CatalogSorting = ({}) => {

  const dispatch = useDispatch();
  const checkedValue = useSelector((state) => state.filterSorting.mode);
  const filteredProductsWithPrice = useSelector((state) => state.filteredProductsWithPrice.data);
  const productsToResrtSorting = useSelector((state) => state.filterSorting.productsToResrtSorting);
  const isPageLoaded = useSelector((state) => state.page.isLoaded);


  const productsSorting = (mode) => {
    switch (mode) {
      case "fromCheap":
        return filteredProductsWithPrice
          .slice()
          .sort(
            (a, b) =>
              Math.min(...findValueByPath(a, "colors.products.price").value) -
              Math.min(...findValueByPath(b, "colors.products.price").value)
          );
      case "fromExpensive":
        return filteredProductsWithPrice
          .slice()
          .sort(
            (a, b) =>
              Math.min(...findValueByPath(b, "colors.products.price").value) -
              Math.min(...findValueByPath(a, "colors.products.price").value)
          );
      default: // "bestsellers"
        return productsToResrtSorting;
    }
  };

  const handleSelectChange = (event) => {
    dispatch(setFilterSorting(event.target.value));
    dispatch(setFilteredProductsWithPrice(productsSorting(event.target.value)));
  };


  useEffect(() => {
    dispatch(pageLoadedAction());
    if (isPageLoaded) {
        dispatch(setProductsToResrtSorting(filteredProductsWithPrice));
        console.log(filteredProductsWithPrice);
    }
  }, [isPageLoaded]);
  

  return (
    <div className="catalog-sorting">
      <select className="catalog-sorting__selecter" value={checkedValue} onChange={handleSelectChange}>
        <option value="bestsellers">Best Seller</option>
        <option value="fromCheap">From cheap to expensive</option>
        <option value="fromExpensive">From expensive to cheap</option>
      </select>
    </div>
  );
};

export { CatalogSorting };
