import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPriceBy, setPriceTo } from "../../../store/slices/filterSettingsSlice";

const CatalogPriceFilter = ({ onClickfunc }) => {
  const dispatch = useDispatch();
  const minValue = useSelector((state) => state.filterSettings.minPrice);
  const maxValue = useSelector((state) => state.filterSettings.maxPrice);
  const priceBy = useSelector((state) => state.filterSettings.priceBy);
  const priceTo = useSelector((state) => state.filterSettings.priceTo);

  const [isPriceByError, setIsPriceByError] = useState(false);
  const [isPriceToError, setIsPriceToError] = useState(false);

  useEffect(() => {
    dispatch(setPriceBy(minValue));
    dispatch(setPriceTo(maxValue));
  }, [minValue, maxValue, ]);

  const filterByPrice = () => {
    if (!isPriceByError && !isPriceToError) {
      onClickfunc();
    }
  };

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



  return (
    <div>
      <div className="price-filter">
        <h5 className="price-filter__title">ФІЛЬТРАЦІЯ ЗА ЦІНОЮ</h5>
        <div>
          <input
            type="number"
            className={`price-filter__input ${isPriceByError ? 'price-filter__input--error' : ''}`}
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
            className={`price-filter__input ${isPriceToError ? 'price-filter__input--error' : ''}`}
            id="maxPriceInput"
            name="maxPriceInput"
            value={priceTo}
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
