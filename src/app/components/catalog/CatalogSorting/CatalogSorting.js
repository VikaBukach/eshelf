import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilterSorting, setProductsToResrtSorting } from "../../../store/slices/filterSortingSlice";
import { findValueByPath } from "../../../helpers/catalog"
import { pageLoadedAction } from "../../../store/actions";
import { setFilteredProductsWithPrice,updateFilteredProductsWithPrice, selectFilteredProductsWithPriceStatus } from '../../../store/slices/filteredProductsWithPriceSlice'

const CatalogSorting = ({}) => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const checkedValue = useSelector((state) => state.filterSorting.mode);
  const filteredProductsWithPrice = useSelector((state) => state.filteredProductsWithPrice.data);
  const productsToResrtSorting = useSelector((state) => state.filterSorting.productsToResrtSorting);
  const filteredProductsWithPriceStatus = useSelector(selectFilteredProductsWithPriceStatus);


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


  // ------- ВЗАЄМОДІЯ З КОРИСТУВАЧЕМ
  // ------- СОРТУВАННЯ - зміна значення

  useEffect(() => {
    if (filteredProductsWithPriceStatus === 'idle') {
      const sortingProductsArray = productsSorting(checkedValue);
      dispatch(setFilteredProductsWithPrice(sortingProductsArray));
    }
  }, [filteredProductsWithPriceStatus, checkedValue]);

  return (
    <div className="catalog-sorting">
      <select
        className="catalog-sorting__selecter"
        value={checkedValue}
        onChange={(event) => dispatch(setFilterSorting(event.target.value))}
      >
        <option value="bestsellers">Best Seller</option>
        <option value="fromCheap">From cheap to expensive</option>
        <option value="fromExpensive">From expensive to cheap</option>
      </select>
    </div>
  );
};

export { CatalogSorting };
