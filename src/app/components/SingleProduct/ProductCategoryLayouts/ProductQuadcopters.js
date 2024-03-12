import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveColorIndex, setActiveImageIndex } from "../../../store/slices/singleProductSlice";
import { toggleFavorites } from "../../../store/slices/favoritesSlice";
import { toggleCompare } from "../../../store/slices/compareSlice";
import { addToCart } from "../../../store/slices/cartSlice";

import { ReactComponent as AboutPowerIcon } from "../../../../assets/images/product-icons/Power.svg";
import { ReactComponent as AboutCountIcon } from "../../../../assets/images/product-icons/Count.svg";
import { ReactComponent as AboutSpeedIcon } from "../../../../assets/images/product-icons/Speed.svg";
import { ReactComponent as AboutBatteryIcon } from "../../../../assets/images/product-icons/Battery.svg";
import { ReactComponent as AboutTimeIcon } from "../../../../assets/images/product-icons/Time.svg";
import { ReactComponent as AboutHeightIcon } from "../../../../assets/images/product-icons/Height.svg";

import { ReactComponent as AboutComparingIcon } from "../../../../assets/images/Balance.svg";
import { ReactComponent as AboutFavoritesIcon } from "../../../../assets/images/Heart.svg";

import { ButtonBuy } from "../ButtonBuy";
import { WeAccept } from "../WeAccept";

const ProductQuadcopters = ({ product }) => {
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
    grey: "#9F9F9F",
    orange: "#FFB900",
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
        {product.colors[activeColorIndex]?.products && (
          <div className="info-details__wrap">
            <div className="info-details__header">
              Details
              {product.colors[activeColorIndex].products[activeMemoryIndex]?.article && (
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
            {product.specifications.characteristics?.max_speed && (
              <div className="info-details__characteristics-item">
                <AboutSpeedIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Max speed</div>
                  <span>{product.specifications.characteristics.max_speed}</span>
                </div>
              </div>
            )}
            {product.specifications.characteristics?.charging_time && (
              <div className="info-details__characteristics-item">
                <AboutPowerIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Charging time</div>
                  <span>{product.specifications.characteristics.charging_time}</span>
                </div>
              </div>
            )}
            {product.specifications.characteristics?.battery_capacity && (
              <div className="info-details__characteristics-item">
                <AboutBatteryIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Battery capacity</div>
                  <span>{product.specifications.characteristics.battery_capacity}</span>
                </div>
              </div>
            )}
            {product.specifications.characteristics?.flight_time && (
              <div className="info-details__characteristics-item">
                <AboutTimeIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Flight time</div>
                  <span>{product.specifications.characteristics.flight_time}</span>
                </div>
              </div>
            )}
            {product.specifications.characteristics?.flight_height && (
              <div className="info-details__characteristics-item">
                <AboutHeightIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Flight height</div>
                  <span>{product.specifications.characteristics.flight_height}</span>
                </div>
              </div>
            )}
            {product.specifications.characteristics?.range_of_action && (
              <div className="info-details__characteristics-item">
                <AboutCountIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Range of action</div>
                  <span>{product.specifications.characteristics.range_of_action}</span>
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

export { ProductQuadcopters };
