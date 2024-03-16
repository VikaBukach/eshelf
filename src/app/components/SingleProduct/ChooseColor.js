import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveColorIndex } from '../../store/slices/singleProductSlice';

const ChooseColor = ({ product }) => {

const activeColorIndex = useSelector((state) => state.product.activeColorIndex);
const dispatch = useDispatch();

const handleColorItemClick = (index) => {
  dispatch(setActiveColorIndex(index));
};

const colorMap = {
  black: "#333333",
  white: "#F2F2F2",
  silver: "#c0c0c0",
  midnight: "#2e2e2e",
  starlight: "#d7cdc4",
  titanium: "#221f1f4d",
  red: "#ff583b",
  gold: "#ffbf00",
  "black titanium": "#2e2e2e",
  "white titanium": "#FCFFF0",
  "blue titanium": "#5f778a",
  "natural titanium": "#878681",
  "mystic black": "#080313",
  "slate gray": "#708090",
  "midnight gray": "#65696c",
  pink: "#B700C7",
  blue: "#7FC6F9",
  yellow: "#F1F522",
  green: "#54C02E",
  violet: "#9018DA",
  gray: "#ABABAB",
  grey: "#9F9F9F",
  orange: "#FFB900",
  platinum: "#e5e4e2",
};

  return (
    <>
      {product.colors && (
        <div className="info-details__wrap">
          <div className="info-details__header">Choose color</div>
          <div className="info-details__color-block">
            {product.colors.map((item, i) => (
              <div
                key={i}
                onClick={() => handleColorItemClick(i)}
                style={{ backgroundColor: `${colorMap[item.color] || item.color}` }}
                className={`info-details__color-item ${i === activeColorIndex ? "info-details__color-active" : ""}`}
              ></div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export { ChooseColor }