import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CatalogFilterItem } from "../CatalogFilterItem/CatalogFilterItem";
import { setBaseFilteredProducts, updateBaseFilterData, selectFilteredProductsStatus } from "../../../store/slices/filteredProductsSlice";
import { setFilteredProductsWithPrice,updateFilteredProductsWithPrice, selectFilteredProductsWithPriceStatus } from "../../../store/slices/filteredProductsWithPriceSlice";
import { CatalogPriceFilter } from "../CatalogPriceFilter/CatalogPriceFilter";
import { findValueByPath } from "../../../helpers/catalog"
import { setFilterSorting, setProductsToResrtSorting } from "../../../store/slices/filterSortingSlice";
import { pageLoadedAction } from "../../../store/actions";

const CatalogProductList = () => {
  const dispatch = useDispatch();
  const filteredProductsWithPrice = useSelector((state) => state.filteredProductsWithPrice.data);
  const products = useSelector((state) => state.products.data);
  const filteredProducts = useSelector((state) => state.filteredProducts.baseFilter);
  const filterSettings = useSelector((state) => state.filterSettings.checkboxes);
  const priceBy = useSelector((state) => state.filterSettings.priceBy);
  const priceTo = useSelector((state) => state.filterSettings.priceTo);
  const baseFilterProductsStatus = useSelector(selectFilteredProductsStatus);
  const checkedValue = useSelector((state) => state.filterSorting.mode);
  const productsToResrtSorting = useSelector((state) => state.filterSorting.productsToResrtSorting);
  const filteredProductsWithPriceStatus = useSelector(selectFilteredProductsWithPriceStatus);

  // ------- ПОЧАТОК РОБОТИ
  // ------- Заповнення массивів BASE та PRICE при завантаженні сторінки, а також до до ресет-сховища

  useEffect(() => {
    dispatch(setBaseFilteredProducts(products));
    dispatch(setFilteredProductsWithPrice(products));
    dispatch(setProductsToResrtSorting(products));
  }, [products]);

  // ------- Коли PRICE завантажився - робимо копію до ресет-сховища по сортуванню, повторюємо при кожній зміні PRICE
  // useEffect(() => {
  //   if (filteredProductsWithPriceStatus === 'idle') {
  //     dispatch(setProductsToResrtSorting(filteredProductsWithPrice));
  //   }
  // }, [filteredProductsWithPriceStatus]);

  // ------- ВЗАЄМОДІЯ З КОРИСТУВАЧЕМ





  // ---------------------------------------------------------
  // --------------------ВРЕМЕННОЕ----------------------------
  // ---------------------------------------------------------
  let productItems = [];

  filteredProductsWithPrice.forEach((product) => {
    product.colors.forEach((color) => {
      const productItem = {};
      productItem.fullName = product.brand + " " + product.model + " " + color.color;
      productItem.index = product._id + color.color;
      productItem.priceBy = color.products[0].price;
      let l = color.products.length - 1;
      productItem.priceTo = color.products[l].price;
      productItem.bool = product.test_boolean ? "Yes" : "No";
      productItem.battary_capacity = product.specifications.battery.capacity;
      productItem.capacity = [];
      let b = color.products.forEach((product) => {
        productItem.capacity.push(product.capacity + " / ");
      });

      productItems.push(productItem);
    });
  });
  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // ---------------------------------------------------------

  return (
    <ul className="product-list">
      {productItems.map((productItem) => (
        <li className="product-list__item" key={productItem.index}>
          <p>{productItem.fullName}</p>
          <p>-----------</p>
          <p>
            price by {productItem.priceBy} to {productItem.priceTo}
          </p>
          <p>-----------</p>
          <p>{productItem.bool}</p>
          <p>-----------</p>
          <p>{productItem.battary_capacity}</p>
          <p>-----------</p>
          <p>{productItem.capacity}</p>
        </li>
      ))}
    </ul>
  );
};

export { CatalogProductList };
