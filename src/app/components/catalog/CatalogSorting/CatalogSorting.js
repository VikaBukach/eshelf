import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFilterSorting } from "../../../store/slices/filterSortingSlice";
import { findValueByPath } from "../../../helpers/catalog";
import {
  setFilteredProductsWithPrice,
  selectFilteredProductsWithPriceStatus,
} from "../../../store/slices/filteredProductsWithPriceSlice";
import { createUrlFromFilterSettings } from "../../../utils/filter-url";

const CatalogSorting = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkedValue = useSelector((state) => state.filterSorting.mode);
  const filterSettings = useSelector((state) => state.filterSettings.checkboxes);
  const priceBy = useSelector((state) => state.filterSettings.priceBy);
  const priceTo = useSelector((state) => state.filterSettings.priceTo);
  const minValue = useSelector((state) => state.filterSettings.minPrice);
  const maxValue = useSelector((state) => state.filterSettings.maxPrice);
  const filteredProductsWithPrice = useSelector((state) => state.filteredProductsWithPrice.data);
  const productsToResrtSorting = useSelector((state) => state.filterSorting.productsToResrtSorting);
  const filteredProductsWithPriceStatus = useSelector(selectFilteredProductsWithPriceStatus);

  // Сортування по існуючих варіантах
  // const productsSorting = (mode) => {
  //   switch (mode) {
  //     case "From cheap":
  //       return filteredProductsWithPrice
  //         .slice()
  //         .sort(
  //           (a, b) =>
  //             Math.min(...findValueByPath(a, "colors.products.price").value) -
  //             Math.min(...findValueByPath(b, "colors.products.price").value)
  //         );
  //     case "From expensive":
  //       return filteredProductsWithPrice
  //         .slice()
  //         .sort(
  //           (a, b) =>
  //             Math.min(...findValueByPath(b, "colors.products.price").value) -
  //             Math.min(...findValueByPath(a, "colors.products.price").value)
  //         );
  //     default: // "bestsellers"
  //       return productsToResrtSorting;
  //   }
  // };

  // ДІЇ ПО КНОПКАХ

  // Підкривання-закривання варіантів
  const openOptions = () => {
    document.querySelector(".catalog-sorting__options").classList.toggle("catalog-sorting__options--open");
  };

  // Вибір опції - клік
  document.querySelectorAll(".catalog-sorting__option").forEach((option) => {
    option.addEventListener("click", () => {
      document.querySelector(".catalog-sorting__options").classList.remove("catalog-sorting__options--open");
      dispatch(setFilterSorting(option.getAttribute("data-value")));

      const url = `?${createUrlFromFilterSettings(filterSettings, priceBy, priceTo, minValue, maxValue, option.getAttribute("data-value"))}`;
      navigate(url);
    });
  });

  // ЗМІНА СТАНІВ

  // useEffect(() => {
  //   if (filteredProductsWithPriceStatus === "idle") {
  //     const sortingProductsArray = productsSorting(checkedValue);
  //     dispatch(setFilteredProductsWithPrice(sortingProductsArray));
  //   }
  // }, [checkedValue]);

  return (
    <>
      <div className="catalog-sorting">
        <div className="catalog-sorting__btn" onClick={openOptions}>
          <img className="catalog-sorting__img" src="../assets/icons/sorting.svg" alt="Icon" />
          <span className="catalog-sorting__checked-option">{checkedValue}</span>
        </div>
        <div className="catalog-sorting__options">
          <span className="catalog-sorting__options__triangle"></span>
          <div className="catalog-sorting__options__container">
            <span
              className={`catalog-sorting__option ${checkedValue === "Best Seller" ? "catalog-sorting__option--checked" : ""}`}
              data-value="Best Seller"
            >
              Best Seller
            </span>
            <span
              className={`catalog-sorting__option ${checkedValue === "From cheap" ? "catalog-sorting__option--checked" : ""}`}
              data-value="From cheap"
            >
              From cheap to expensive
            </span>
            <span
              className={`catalog-sorting__option ${checkedValue === "From expensive" ? "catalog-sorting__option--checked" : ""}`}
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
