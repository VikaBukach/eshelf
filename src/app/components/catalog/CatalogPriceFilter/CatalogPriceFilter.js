import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPriceBy, setPriceTo } from "../../../store/slices/filterSettingsSlice";

const CatalogPriceFilter = ({ onClickfunc }) => {
  const dispatch = useDispatch();
  const minValue = useSelector((state) => state.filterSettings.minPrice);
  const maxValue = useSelector((state) => state.filterSettings.maxPrice);
  const priceBy = useSelector((state) => state.filterSettings.priceBy);
  const priceTo = useSelector((state) => state.filterSettings.priceTo);

  const [minPriceValue, setMinPriceValue] = useState(minValue);
  const [maxPriceValue, setMaxPriceValue] = useState(maxValue);
  const [isMinPriceError, setIsMinPriceError] = useState(false);
  const [isMaxPriceError, setIsMaxPriceError] = useState(false);

  useEffect(() => {
    setMinPriceValue(minValue);
    setMaxPriceValue(maxValue);
  }, [minValue, maxValue, ]);

  const filterByPrice = () => {
    if (!isMinPriceError && !isMaxPriceError) {
        onClickfunc();
    }
  };

  const ckeckValidation = () => {
    setIsMinPriceError(minPriceValue < minValue || minPriceValue > maxValue || minPriceValue > maxPriceValue);
    setIsMaxPriceError(maxPriceValue < minValue || maxPriceValue > maxValue || maxPriceValue < minPriceValue);
  };

  const handleMinPriceChange = (event) => {
    const { value } = event.target;
    setMinPriceValue(Number(value));
  };
  
  const handleMaxPriceChange = (event) => {
    const { value } = event.target;
    setMaxPriceValue(Number(value));
  };



  return (
    <div>
      <div className="price-filter">
        <h5 className="price-filter__title">ФІЛЬТРАЦІЯ ЗА ЦІНОЮ</h5>
        <div>
          <input
            type="number"
            className={`price-filter__input ${isMinPriceError ? 'price-filter__input--error' : ''}`}
            id="minPriceInput"
            name="minPriceInput"
            value={minPriceValue}
            min={minValue}
            max={maxValue}
            onChange={handleMinPriceChange}
            onBlur={ckeckValidation}
          />
          <input
            type="number"
            className={`price-filter__input ${isMaxPriceError ? 'price-filter__input--error' : ''}`}
            id="maxPriceInput"
            name="maxPriceInput"
            value={maxPriceValue}
            min={minValue}
            max={maxValue}
            onChange={handleMaxPriceChange}
            onBlur={ckeckValidation}
          />
          <button type="button" id="price-filter__button" onClick={filterByPrice}>
            OK
          </button>
        </div>
        <p>--------------</p>
      </div>
    </div>
  );
};

export { CatalogPriceFilter };
