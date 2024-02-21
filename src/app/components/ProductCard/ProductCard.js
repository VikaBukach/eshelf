import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ProductCard({ id, imageURL, category, title, price, discountPrice }) {
  return (
    <Link to={`/${id}`}>
      <div className="card-product">
        <div className="card-product__image-container">
          <img src={imageURL} alt="product photo" />
        </div>

        <div className="card-product__functions">
          <Link to="/favorites">
            <button className="card-product__functions__button">
              <img src="../assets/icons/favourite-stroke.svg" alt="favourite" />
            </button>
          </Link>

          <Link to="/comparing">
            <button className="card-product__functions__button">
              <img src="../assets/icons/balance-stroke.svg" alt="favourite" />
            </button>
          </Link>
        </div>

        <div className="card-product__info">
          <span className="card-product__info__category">{category}</span>

          <p className="card-product__info__title">{title}</p>

          <div className="card-product__info__rating">
            <img src="../assets/icons/star-stroke.svg" alt="rate" />
            <img src="../assets/icons/star-stroke.svg" alt="rate" />
            <img src="../assets/icons/star-stroke.svg" alt="rate" />
            <img src="../assets/icons/star-stroke.svg" alt="rate" />
            <img src="../assets/icons/star-stroke.svg" alt="rate" />
          </div>

          <div className="card-product__info__price-container">
            <span className="card-product__info__price-container__price">₴ {discountPrice}</span>
            <span className="card-product__info__price-container__discount">₴ {price}</span>
          </div>
        </div>

        <button className="card-product__btn-cart">
          <img src="../assets/icons/basket.svg" alt="basket" />
        </button>
      </div>
    </Link>
  );
}

// id, imageURL, category, title, price, discountPrice
ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  discountPrice: PropTypes.string.isRequired,
};

ProductCard.defaultProps = {
  imageURL:
    "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg",
};
