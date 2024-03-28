import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Slices
import { setFilterSorting } from "../../../store/slices/filterSortingSlice";

const CatalogSorting = ({ onChangeFunction }) => {
  const dispatch = useDispatch();
  const checkedValue = useSelector((state) => state.filterSorting.mode);

  const openOptions = () => {
    document.querySelector(".catalog-sorting__options").classList.toggle("catalog-sorting__options--open");
  };

  useEffect(() => {
    const onClickFunction = (event) => {
      document.querySelector(".catalog-sorting__options").classList.remove("catalog-sorting__options--open");
      const selectedValue = event.target.getAttribute("data-value");
      if (checkedValue !== selectedValue) {
        dispatch(setFilterSorting(selectedValue));
        onChangeFunction(selectedValue);
      }
    };

    document.querySelectorAll(".catalog-sorting__option").forEach((option) => {
      option.addEventListener("click", onClickFunction);
    });

    return () => {
      document.querySelectorAll(".catalog-sorting__option").forEach((option) => {
        option.removeEventListener("click", onClickFunction);
      });
    };
  }, [checkedValue]);

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
