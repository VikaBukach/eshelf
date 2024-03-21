import React from "react";
import { useSelector, useDispatch } from "react-redux";
// Slices
import { setFilterSorting } from "../../../store/slices/filterSortingSlice";

const CatalogSorting = ({}) => {
  const dispatch = useDispatch();

  const checkedValue = useSelector((state) => state.filterSorting.mode);

  // Підкривання-закривання варіантів
  const openOptions = () => {
    document.querySelector(".catalog-sorting__options").classList.toggle("catalog-sorting__options--open");
  };

  // Вибір опції - клік
  document.querySelectorAll(".catalog-sorting__option").forEach((option) => {
    option.addEventListener("click", () => {
      document.querySelector(".catalog-sorting__options").classList.remove("catalog-sorting__options--open");
      dispatch(setFilterSorting(option.getAttribute("data-value")));
    });
  });

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
