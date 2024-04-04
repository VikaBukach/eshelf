import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import { ButtonBuy } from "./ButtonBuy";
import { WeAccept } from "./WeAccept";

export const CharacteristicBuy = ({ product }) => {
  const activeColorIndex = useSelector((state) => state.product.activeColorIndex);
  const activeImageIndex = useSelector((state) => state.product.activeImageIndex);
  const activeMemoryIndex = useSelector((state) => state.product.activeMemoryIndex);

  const dispatch = useDispatch();

  const { _id: id, colors, category, model: title } = product;
  // FIX
  const { images, products } = colors;
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

  const handleAddToCart = () => {
    dispatch(addToCart(productDetails));
  };
  return (
    <div className="characteristic-body__buy">
      <div className="characteristic-body__carriage">
        <div className="characteristic-body__wrapper characteristic-aside">
          <div className="characteristic-aside__img">
            <img src={`${product.colors.images[0]}`} alt={`${product.model}`} />
          </div>
          <div className="characteristic-aside__details">
            {product.model && <div className="characteristic-aside__title">{product.model}</div>}
            {product.colors.products[activeMemoryIndex].article && (
              <div className="characteristic-aside__article">
                Code: <span>{product.colors.products[activeMemoryIndex].article}</span>
              </div>
            )}

            {product.colors.products[activeMemoryIndex].price && (
              <div className="characteristic-aside__price-old">{product.colors.products[activeMemoryIndex].price}</div>
            )}

            {product.colors.products[activeMemoryIndex].discount_price && (
              <div className="characteristic-aside__price">
                {product.colors.products[activeMemoryIndex].discount_price}
              </div>
            )}

            <div className="characteristic-aside__button">
              <ButtonBuy onClick={handleAddToCart} />
            </div>
            <WeAccept />
          </div>
        </div>
      </div>
    </div>
  );
};
