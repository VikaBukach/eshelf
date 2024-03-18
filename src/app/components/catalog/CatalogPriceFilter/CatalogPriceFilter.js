import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPriceBy, setPriceTo } from "../../../store/slices/filterSettingsSlice";
import { updateFilteredProductsWithPrice } from "../../../store/slices/filteredProductsWithPriceSlice";
import { selectFilteredProductsStatus } from "../../../store/slices/filteredProductsSlice";
import { findValueByPath, findMinAndMaxPrice } from "../../../helpers/catalog";
import { setMinPrice, setMaxPrice } from "../../../store/slices/filterSettingsSlice";
import { setProductsToResrtSorting } from "../../../store/slices/filterSortingSlice";
import { createUrlFromFilterSettings } from "../../../utils/filter-url";

const CatalogPriceFilter = ({ pricePath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filterSettings = useSelector((state) => state.filterSettings.checkboxes);
  const minValue = useSelector((state) => state.filterSettings.minPrice);
  const maxValue = useSelector((state) => state.filterSettings.maxPrice);
  const priceBy = useSelector((state) => state.filterSettings.priceBy);
  const priceTo = useSelector((state) => state.filterSettings.priceTo);
  const checkedSortingValue = useSelector((state) => state.filterSorting.mode);
  const baseFilterProductsStatus = useSelector(selectFilteredProductsStatus);
  const filteredProducts = useSelector((state) => state.filteredProducts.baseFilter);

  const [isPriceByError, setIsPriceByError] = useState(false);
  const [isPriceToError, setIsPriceToError] = useState(false);

  // Перевірка валідності значень інпутів
  const ckeckValidation = () => {
    setIsPriceByError(priceBy < minValue || priceBy > maxValue || priceBy > priceTo);
    setIsPriceToError(priceTo < minValue || priceTo > maxValue || priceTo < priceBy);
  };



  // Фільтрація базового масиву по ціні
  const filterByPrice = () => {
    const filteredProductsArray = [];

    if (priceBy !== 0 && priceTo !== 0) {
      filteredProducts.forEach((product) => {
        const { minValue, maxValue } = findMinAndMaxPrice([product]);

        if (
          (minValue >= priceBy && minValue <= priceTo) ||
          (maxValue >= priceBy && maxValue <= priceTo) ||
          (minValue <= priceBy && maxValue >= priceBy) ||
          (minValue <= priceTo && maxValue >= priceTo)
        ) {
          filteredProductsArray.push(product);
        }
      });
      return filteredProductsArray;
    } else {
      return filteredProducts;
    }
  };

  // Фільтр-посилання
  const navigateToUrlWithSettings = () => {
    const url = `?${createUrlFromFilterSettings(filterSettings, priceBy, priceTo, minValue, maxValue, checkedSortingValue)}`;
    navigate(url);
  };

  // ------- ФІЛЬТРАЦІЯ ПО ЦІНІ - по кнопці і при кожній зміні статусу BASE
  const submitFilterByPrice = () => {
    if (!isPriceByError && !isPriceToError) {
      dispatch(updateFilteredProductsWithPrice(filterByPrice()));
      dispatch(setProductsToResrtSorting(filterByPrice()));
      if (filterSettings.length !== 0 || priceBy !== minValue || priceTo !== maxValue) {
        navigateToUrlWithSettings();
      }
    }
  };

  // ДІЇ ПО КНОПКАХ

  // Зміна значень інпутів
  const handleMaxPriceChange = (event) => {
    const { value } = event.target;
    dispatch(setPriceTo(Number(value)));
  };

  const handleMinPriceChange = (event) => {
    const { value } = event.target;
    dispatch(setPriceBy(Number(value)));
  };

  // ЗМІНА СТАНІВ

  useEffect(() => {
    if (baseFilterProductsStatus === "idle") {
      dispatch(setMinPrice(findMinAndMaxPrice(filteredProducts).minValue));
      dispatch(setMaxPrice(findMinAndMaxPrice(filteredProducts).maxValue));
      if (priceBy === 0 || priceTo === 0) {
        dispatch(setPriceBy(findMinAndMaxPrice(filteredProducts).minValue));
        dispatch(setPriceTo(findMinAndMaxPrice(filteredProducts).maxValue));
      }

      if (priceBy !== 0 || priceTo !== 0) {
        dispatch(updateFilteredProductsWithPrice(filterByPrice()));
        dispatch(setProductsToResrtSorting(filterByPrice()));
      } else if (minValue === 0 || maxValue === 0) {
        dispatch(updateFilteredProductsWithPrice(filteredProducts));
        dispatch(setProductsToResrtSorting(filteredProducts));
      } else {
        dispatch(updateFilteredProductsWithPrice(filterByPrice()));
        dispatch(setProductsToResrtSorting(filterByPrice()));
      }
    }
  }, [baseFilterProductsStatus]);

  return (
    <div>
      <div className="price-filter">
        <div className="price-filter__inputs-cover">
          <input
            type="number"
            className={`price-filter__input ${isPriceByError ? "price-filter__input--error" : ""}`}
            id="minPriceInput"
            name="minPriceInput"
            value={priceBy === 0 ? minValue : priceBy}
            min={minValue}
            max={maxValue}
            onChange={handleMinPriceChange}
            onBlur={ckeckValidation}
          />
          <input
            type="number"
            className={`price-filter__input ${isPriceToError ? "price-filter__input--error" : ""}`}
            id="maxPriceInput"
            name="maxPriceInput"
            value={priceTo === 0 ? maxValue : priceTo}
            min={minValue}
            max={maxValue}
            onChange={handleMaxPriceChange}
            onBlur={ckeckValidation}
          />
        </div>
        <button type="button" className="price-filter__button" id="price-filter__button" onClick={submitFilterByPrice}>
          OK
        </button>
      </div>
    </div>
  );
};

export { CatalogPriceFilter };
