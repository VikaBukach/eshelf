import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import { toggleFavorites } from "../../store/slices/favoritesSlice";
import { classNames } from "../../utils/classNames";
import { toggleCompare } from "../../store/slices/compareSlice";

export default function ProductCard({ id, imageURL, category, title, price, discountPrice, color }) {
  const product = { id, imageURL, category, title, price, discountPrice};

  const formatColor = color.includes(' ') ? color.replace(/\s+/g, '-') : color;

  const urlProduct = `/${category}/${id}/${formatColor}`;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onCartAddHandler = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  const favorites = useSelector((state) => state.favorites.data);
  const compare = useSelector((state) => state.compare.data);
  const productsList = useSelector((state) => state.products.data);

  const toggleFavoritesHandle = (e) => {
    e.stopPropagation();

    dispatch(toggleFavorites(product));
  };
  const toggleCompareHandler = (e) => {
    e.stopPropagation();

    const fullProduct = productsList.find((p) => p._id == id);

    // dispatch(toggleCompare({ ...fullProduct, id: fullProduct._id, color: fullProduct.colors[0], ...product }));
    dispatch(toggleCompare({ ...fullProduct, category }));
  };

  const isFavorites = favorites.findIndex((f) => f.id == id) >= 0;
  const isCompare = compare.findIndex((f) => f.id == id) >= 0;

  return (
    <div className="card-product">
      <div className="card-product__image-container" onClick={() => navigate(urlProduct)}>
        <img src={imageURL} alt="product photo" />
      </div>

      <div className="card-product__functions">
        <button
          onClick={toggleFavoritesHandle}
          className={classNames(
            "card-product__functions__button",
            isFavorites ? "card-product__functions__button--active" : ""
          )}
        >
          <img src="../assets/icons/favourite-stroke.svg" alt="favourite" />
        </button>

        <button
          onClick={toggleCompareHandler}
          className={classNames(
            "card-product__functions__button",
            isCompare ? "card-product__functions__button--active" : ""
          )}
        >
          <img src="../assets/icons/balance-stroke.svg" alt="favourite" />
        </button>
      </div>

      <div className="card-product__info">
        <span className="card-product__info__category">{category}</span>

        <p className="card-product__info__title" onClick={() => navigate(urlProduct)}>
          {title}
        </p>

        <div className="card-product__info__rating">
          <img src="../assets/icons/star-stroke.svg" alt="rate" />
          <img src="../assets/icons/star-stroke.svg" alt="rate" />
          <img src="../assets/icons/star-stroke.svg" alt="rate" />
          <img src="../assets/icons/star-stroke.svg" alt="rate" />
          <img src="../assets/icons/star-stroke.svg" alt="rate" />
        </div>

        <div className="card-product__info__price-container">
          {discountPrice ? (
            <>
              <span className="card-product__info__price-container__price">$ {discountPrice}</span>
              <span className="card-product__info__price-container__discount">$ {price}</span>
            </>
          ) : (
            <span className="card-product__info__price-container__price">$ {price}</span>
          )}
        </div>
      </div>

      <button onClick={onCartAddHandler} className="card-product__btn-cart">
        <img src="../assets/icons/basket.svg" alt="basket" />
      </button>
    </div>
  );
}

// id, imageURL, category, title, price, discountPrice
ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  discountPrice: PropTypes.number,
};

ProductCard.defaultProps = {
  imageURL:
    "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg",
};
