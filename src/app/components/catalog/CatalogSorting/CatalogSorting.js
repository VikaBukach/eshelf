import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilterSorting } from "../../../store/slices/filterSortingSlice";
import { findValueByPath } from "../../../helpers/catalog";
import {
  setFilteredProductsWithPrice,
  selectFilteredProductsWithPriceStatus,
} from "../../../store/slices/filteredProductsWithPriceSlice";

const CatalogSorting = ({}) => {
  const dispatch = useDispatch();
  const checkedValue = useSelector((state) => state.filterSorting.mode);
  const filteredProductsWithPrice = useSelector((state) => state.filteredProductsWithPrice.data);
  const productsToResrtSorting = useSelector((state) => state.filterSorting.productsToResrtSorting);
  const filteredProductsWithPriceStatus = useSelector(selectFilteredProductsWithPriceStatus);

  const productsSorting = (mode) => {
    switch (mode) {
      case "From cheap":
        return filteredProductsWithPrice
          .slice()
          .sort(
            (a, b) =>
              Math.min(...findValueByPath(a, "colors.products.price").value) -
              Math.min(...findValueByPath(b, "colors.products.price").value)
          );
      case "From expensive":
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

  document.querySelectorAll(".catalog-sorting__option").forEach((option) => {
    option.addEventListener("click", () => {
      dispatch(setFilterSorting(option.getAttribute("data-value")));
    });
  });

  const openOptions = () => {
    document.querySelector(".catalog-sorting__options").classList.toggle("catalog-sorting__options--open");
  };

  document.querySelectorAll(".catalog-sorting__option").forEach((option) => {
    option.addEventListener("click", () => {
      document.querySelector(".catalog-sorting__options").classList.remove("catalog-sorting__options--open");
    });
  });

  useEffect(() => {
    if (filteredProductsWithPriceStatus === "idle") {
      const sortingProductsArray = productsSorting(checkedValue);
      dispatch(setFilteredProductsWithPrice(sortingProductsArray));
    }
  }, [filteredProductsWithPriceStatus, checkedValue]);

  return (
    <>
      <div class="catalog-sorting">
        <div class="catalog-sorting__btn" onClick={openOptions}>
          <img class="catalog-sorting__img" src="../assets/icons/sorting.svg" alt="Icon" />
          <span class="catalog-sorting__checked-option">{checkedValue}</span>
        </div>
        <div class="catalog-sorting__options">
          <span class="catalog-sorting__options__triangle"></span>
          <div class="catalog-sorting__options__container">
            <span
              class={`catalog-sorting__option ${checkedValue === "Best Seller" ? "catalog-sorting__option--checked" : ""}`}
              data-value="Best Seller"
            >
              Best Seller
            </span>
            <span
              class={`catalog-sorting__option ${checkedValue === "From cheap" ? "catalog-sorting__option--checked" : ""}`}
              data-value="From cheap"
            >
              From cheap to expensive
            </span>
            <span
              class={`catalog-sorting__option ${checkedValue === "From expensive" ? "catalog-sorting__option--checked" : ""}`}
              data-value="From expensive"
            >
              From expensive to cheap
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export { CatalogSorting };
