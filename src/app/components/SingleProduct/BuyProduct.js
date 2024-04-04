import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorites } from "../../store/slices/favoritesSlice";
import { toggleCompare } from "../../store/slices/compareSlice";
import { addToCart } from "../../store/slices/cartSlice";
import { ButtonBuy } from "./ButtonBuy";

import { ReactComponent as AboutComparingIcon } from "../../../assets/images/Balance.svg";
import { ReactComponent as AboutFavoritesIcon } from "../../../assets/images/Heart.svg";
import { WeAccept } from "./WeAccept";

const BuyProduct = ({ product }) => {
  const activeColorIndex = useSelector((state) => state.product.activeColorIndex);
  const activeImageIndex = useSelector((state) => state.product.activeImageIndex);
  const activeMemoryIndex = useSelector((state) => state.product.activeMemoryIndex);
  const favorites = useSelector((state) => state.favorites.data);
  const compare = useSelector((state) => state.compare.data);
  const dispatch = useDispatch();

  const { _id: id, colors, category, model: title } = product;

  if (!colors || colors.length === 0 || !colors[activeColorIndex]) {
    return null;
  }

  const activeColor = colors[activeColorIndex];
  const { images, products, color } = activeColor;
  const { price, discount_price: discountPrice } = products[activeMemoryIndex];
  const imageURL = images[activeImageIndex];

  const productDetails = {
    id,
    imageURL,
    category,
    title,
    price,
    discountPrice,
    color,
  };

  const handleAddToFavorites = () => {
    dispatch(toggleFavorites(productDetails));
  };

  const handleAddToCompare = () => {
    dispatch(toggleCompare(product));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(productDetails));
  };

  return (
    <>
      <div className="info-details__wrap">
        <div className="info-details__header">Price</div>
        <div className="info-details__price-block">
          <div className="info-details__price-old">
            {product.colors[activeColorIndex]?.products[activeMemoryIndex].price}$
          </div>
          <div className="info-details__price-wrap">
            <div className="info-details__price-body">
              <div className="info-details__price">
                {product.colors[activeColorIndex]?.products[activeMemoryIndex].discount_price}$
              </div>
              <ButtonBuy onClick={handleAddToCart} />
            </div>

            <div className="info-details__price-icon-wrap">
              <div
                className={`info-details__price-icon ${compare.findIndex((item) => item.id === product._id) > -1 ? "info-details__icon-favorites info-details__icon-active" : ""}`}
                onClick={handleAddToCompare}
              >
                <AboutComparingIcon />
              </div>
              <div
                className={`info-details__price-icon ${favorites.findIndex((item) => item.id === product._id) > -1 ? "info-details__icon-favorites info-details__icon-active" : ""}`}
                onClick={handleAddToFavorites}
              >
                <AboutFavoritesIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <WeAccept />
    </>
  );
};

export { BuyProduct };
