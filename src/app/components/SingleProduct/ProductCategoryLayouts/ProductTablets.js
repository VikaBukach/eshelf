import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveColorIndex,
  setActiveImageIndex,
  setActiveMemoryIndex,
} from "../../../store/slices/singleProductSlice";
import { toggleFavorites } from "../../../store/slices/favoritesSlice";
import { toggleCompare } from "../../../store/slices/compareSlice";
import { addToCart } from "../../../store/slices/cartSlice";

import { ReactComponent as AboutDiagonalIcon } from "../../../../assets/images/product-icons/Diagonal.svg";
import { ReactComponent as AboutMemoryIcon } from "../../../../assets/images/product-icons/Memory.svg";
import { ReactComponent as AboutCameraIcon } from "../../../../assets/images/product-icons/Camera.svg";
import { ReactComponent as AboutMatrixIcon } from "../../../../assets/images/product-icons/Matrix.svg";

import { ReactComponent as AboutComparingIcon } from "../../../../assets/images/Balance.svg";
import { ReactComponent as AboutFavoritesIcon } from "../../../../assets/images/Heart.svg";

import { ButtonBuy } from "../ButtonBuy";
import { WeAccept } from "../WeAccept";

const ProductTablets = ({ product }) => {
  const activeColorIndex = useSelector((state) => state.product.activeColorIndex);
  const activeImageIndex = useSelector((state) => state.product.activeImageIndex);
  const activeMemoryIndex = useSelector((state) => state.product.activeMemoryIndex);
  const favorites = useSelector((state) => state.favorites.data);
  const dispatch = useDispatch();

  const { _id: id, colors, category, model: title } = product;
  const { images, products } = colors[activeColorIndex];
  const { price, discount_price: discountPrice } = products[activeMemoryIndex];
  const imageURL = images[activeImageIndex];

  const productDetails = {
    id,
    imageURL,
    category,
    title,
    price,
    discountPrice,
  };

  const handleColorItemClick = (index) => {
    dispatch(setActiveColorIndex(index));
  };

  const handleSmallImageClick = (index) => {
    dispatch(setActiveImageIndex(index));
  };

  const handleMemoryClick = (index) => {
    dispatch(setActiveMemoryIndex(index));
  };

  const handleAddToFavorites = () => {
    dispatch(toggleFavorites(productDetails));
  };

  const handleAddToCompare = () => {
    dispatch(toggleCompare(product, category, activeColorIndex, activeMemoryIndex));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(productDetails));
  };

  const colorMap = {
    black: "#333333",
    "mystic black": "#080313",
    platinum: "#e5e4e2",
    "slate gray": "#708090",
    "midnight gray": "#65696c",
  };

  return (
    <div className="product-details-body">
      <div className="product-details-body__slider">
        <div className="product-details-body__img-big">
          <img src={`/${product.colors[activeColorIndex].images[activeImageIndex]}`} alt={`${product.model}`} />
        </div>
        <div className="product-details-body__img-wrap">
          {product.colors[activeColorIndex].images.map((image, i) => (
            <div key={i} className="product-details-body__img-small" onClick={() => handleSmallImageClick(i)}>
              <img src={`/${image}`} alt={`${product.model}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="product-details-body__info info-details">
        {product.colors[activeColorIndex].products && (
          <div className="info-details__wrap">
            <div className="info-details__header">
              Main
              {product.colors[activeColorIndex].products[activeMemoryIndex].article && (
                <span className="info-details__article">
                  Code: {product.colors[activeColorIndex].products[activeMemoryIndex].article}
                </span>
              )}
            </div>
          </div>
        )}

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

        <div className="info-details__wrap">
          <div className="info-details__header">Characteristics</div>
          <div className="info-details__characteristics-block">
            {product.specifications?.display_size && (
              <div className="info-details__characteristics-item">
                <AboutDiagonalIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Display size</div>
                  <span>{product.specifications.display_size}</span>
                </div>
              </div>
            )}
            {product.specifications?.storage && (
              <div className="info-details__characteristics-item">
                <AboutMemoryIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Storage</div>
                  <span>{product.specifications.storage}</span>
                </div>
              </div>
            )}
            {product.specifications?.RAM && (
              <div className="info-details__characteristics-item">
                <AboutMatrixIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">RAM</div>
                  <span>{product.specifications.RAM}</span>
                </div>
              </div>
            )}
            {product.specifications?.camera && (
              <div className="info-details__characteristics-item">
                <AboutCameraIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Camera</div>
                  <span>{product.specifications.camera}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        {product.colors[activeColorIndex].products[activeMemoryIndex]?.discount_price && (
          <div className="info-details__wrap">
            <div className="info-details__header">Price</div>
            <div className="info-details__price-block">
              <div className="info-details__price-old">
                {product.colors[activeColorIndex].products[activeMemoryIndex]?.price}$
              </div>
              <div className="info-details__price-wrap">
                <div className="info-details__price-body">
                  <div className="info-details__price" onClick={handleAddToCart}>
                    {product.colors[activeColorIndex].products[activeMemoryIndex]?.discount_price}$
                  </div>
                  <ButtonBuy />
                </div>

                <div className="info-details__price-icon-wrap">
                  <div className="info-details__price-icon" onClick={handleAddToCompare}>
                    <AboutComparingIcon />
                  </div>
                  <div
                    className={`info-details__price-icon ${favorites.findIndex((item) => item.id === product._id) > -1 ? "info-details__icon-favorites" : ""}`}
                    onClick={handleAddToFavorites}
                  >
                    <AboutFavoritesIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <WeAccept />
      </div>
    </div>
  );
};

export { ProductTablets };
