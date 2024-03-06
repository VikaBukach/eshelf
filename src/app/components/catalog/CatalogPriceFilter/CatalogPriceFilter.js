import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPriceBy, setPriceTo } from "../../../store/slices/filterSettingsSlice";
import { updateFilteredProductsWithPrice } from "../../../store/slices/filteredProductsWithPriceSlice";
import { selectFilteredProductsStatus } from "../../../store/slices/filteredProductsSlice";
import { findValueByPath } from "../../../helpers/catalog";
import { setMinPrice, setMaxPrice } from "../../../store/slices/filterSettingsSlice";
import { setProductsToResrtSorting } from "../../../store/slices/filterSortingSlice";

const CatalogPriceFilter = ({ pricePath }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const minValue = useSelector((state) => state.filterSettings.minPrice);
  const maxValue = useSelector((state) => state.filterSettings.maxPrice);
  const priceBy = useSelector((state) => state.filterSettings.priceBy);
  const priceTo = useSelector((state) => state.filterSettings.priceTo);
  const baseFilterProductsStatus = useSelector(selectFilteredProductsStatus);
  const filteredProducts = useSelector((state) => state.filteredProducts.baseFilter);

  const [isPriceByError, setIsPriceByError] = useState(false);
  const [isPriceToError, setIsPriceToError] = useState(false);

  const ckeckValidation = () => {
    setIsPriceByError(priceBy < minValue || priceBy > maxValue || priceBy > priceTo);
    setIsPriceToError(priceTo < minValue || priceTo > maxValue || priceTo < priceBy);
  };

  const handleMinPriceChange = (event) => {
    const { value } = event.target;
    dispatch(setPriceBy(Number(value)));
  };

  const handleMaxPriceChange = (event) => {
    const { value } = event.target;
    dispatch(setPriceTo(Number(value)));
  };

  // Визначення мінімальної та максимальної ціни з фільтрованих товарів
  const findMinAndMaxPrice = (productArray) => {
    let allPrices = [];
    productArray.forEach((product) => {
      allPrices = [...allPrices, ...findValueByPath(product, pricePath).value];
    });
    return {
      minValue: isFinite(Math.min(...allPrices)) ? Math.min(...allPrices) : 0,
      maxValue: isFinite(Math.max(...allPrices)) ? Math.max(...allPrices) : 0,
    };
  };

  const filterByPrice = () => {
    const filteredProductsArray = [];

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
  };

  useEffect(() => {
    dispatch(setPriceBy(minValue));
    dispatch(setPriceTo(maxValue));
  }, [minValue, maxValue]);

  // ------- На початку роботи заповнюємо параметри BASE та PRICE  згідно з товарами у PRODUCTS
  useEffect(() => {
    dispatch(setMinPrice(findMinAndMaxPrice(filteredProducts).minValue));
    dispatch(setMaxPrice(findMinAndMaxPrice(filteredProducts).maxValue));
  }, [products]);

  // ------- ВЗАЄМОДІЯ З КОРИСТУВАЧЕМ
  // ------- ФІЛЬТРАЦІЯ ПО ЦІНІ - по кнопці і при кожній зміні статусу BASE
  const submitFilterByPrice = () => {
    if (!isPriceByError && !isPriceToError) {
      dispatch(updateFilteredProductsWithPrice(filterByPrice()));
      dispatch(setProductsToResrtSorting(filterByPrice()));
    }
  };

  useEffect(() => {
    if (baseFilterProductsStatus === "idle") {
      submitFilterByPrice();
    }
  }, [baseFilterProductsStatus]);

  return (
    <div>
      <div className="price-filter">
        <h5 className="price-filter__title">ФІЛЬТРАЦІЯ ЗА ЦІНОЮ</h5>
        <div className="price-filter__inputs-cover">
          <input
            type="number"
            className={`price-filter__input ${isPriceByError ? "price-filter__input--error" : ""}`}
            id="minPriceInput"
            name="minPriceInput"
            value={priceBy}
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
            value={priceTo}
            min={minValue}
            max={maxValue}
            onChange={handleMaxPriceChange}
            onBlur={ckeckValidation}
          />
        </div>
        <button type="button" className="price-filter__button" id="price-filter__button" onClick={submitFilterByPrice}>
          OK
        </button>
        <p>--------------</p>
      </div>
    </div>
  );
};

export { CatalogPriceFilter };
