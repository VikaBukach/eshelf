import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// Slices
import { setPriceBy, setPriceTo } from "../../../store/slices/filterSettingsSlice";

const CatalogPriceFilter = ({ onClickFunction }) => {
  const dispatch = useDispatch();

  const filterSettings = useSelector((state) => state.filterSettings.checkboxes);
  const minValue = useSelector((state) => state.filterSettings.minPrice);
  const maxValue = useSelector((state) => state.filterSettings.maxPrice);
  const priceBy = useSelector((state) => state.filterSettings.priceBy);
  const priceTo = useSelector((state) => state.filterSettings.priceTo);

  const [isPriceByError, setIsPriceByError] = useState(false);
  const [isPriceToError, setIsPriceToError] = useState(false);

  // Перевірка валідності значень інпутів
  const ckeckValidation = () => {
    setIsPriceByError(priceBy < minValue || priceBy > maxValue || priceBy > priceTo);
    setIsPriceToError(priceTo < minValue || priceTo > maxValue || priceTo < priceBy);
  };

  const submitFilterByPrice = () => {
    if (
      !isPriceByError &&
      !isPriceToError &&
      (filterSettings.length !== 0 || priceBy !== minValue || priceTo !== maxValue)
    ) {
      onClickFunction();
    }
  };

  // Зміна значень інпутів
  const handleMaxPriceChange = (event) => {
    const { value } = event.target;
    dispatch(setPriceTo(Number(value)));
  };

  const handleMinPriceChange = (event) => {
    const { value } = event.target;
    dispatch(setPriceBy(Number(value)));
  };

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
