import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  changeTabs,
  setActiveColorIndex,
  setActiveMemoryIndex,
  setActiveImageIndex,
} from "../../store/slices/singleProductSlice";
import { AboutProduct } from "../../components/SingleProduct/AboutProduct";
import { CharacteristicProduct } from "../../components/SingleProduct/CharacteristicProduct";
import { PhotoVideoProduct } from "../../components/SingleProduct/PhotoVideoProduct";
import { ReviewsProduct } from "../../components/SingleProduct/ReviewsProduct";
import Rating from "../../components/SingleProduct/components/Rating";
import axios from "axios";
import { loadOneProduct } from "../../store/slices/singleProductSlice";

const ProductPage = () => {
  const { collection, id, color } = useParams();

  const dispatch = useDispatch();

  const regColor = (color) => {
    return color.includes(" ") ? color.replace(/\s+/g, "-") : color;
  };

  const { product } = useSelector((state) => state.product.data);

  const { tabs } = useSelector((state) => state.product);

  const [rating, setRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  const PORT = process.env.REACT_APP_PORT || 5000;
  const REACT_APP_BACK_URL = process.env.REACT_APP_BACK_URL || "http://localhost";

  useEffect(() => {
    const getOverallRating = async () => {
      try {
        if (product) {
          const response = await axios.get(`${REACT_APP_BACK_URL}:${PORT}/getProductReviewTotals`, {
            params: {
              productId: product._id,
            },
          });
          setRating(response.data?.avgRating);
          setTotalReviews(response.data?.reviewsCount);
        }
      } catch (error) {
        console.error("Error fetching overall rating:", error);
      }
    };

    if (product) {
      getOverallRating();
    }
  }, [product, PORT]);

  useEffect(() => {
    dispatch(loadOneProduct({ collection, id }));
    /* return () => {
      dispatch(loadOneProduct(null));
    }; */
  }, []);

  useEffect(() => {
    if (product && product.colors && color) {
      const colorIndex = product.colors.findIndex((c) => regColor(c.color) === regColor(color));
      if (colorIndex !== -1) {
        dispatch(setActiveColorIndex(colorIndex));
      } else {
        // Если цвет не был найден, устанавливаем индекс активного цвета в 0
        dispatch(setActiveColorIndex(0));
      }
    }
    return () => {
      dispatch(changeTabs("About the product"));
      dispatch(setActiveColorIndex(0));
      dispatch(setActiveMemoryIndex(0));
      dispatch(setActiveImageIndex(0));
    };
  }, [product, color, dispatch]);

  const handleTabClick = (tabName) => {
    dispatch(changeTabs(tabName));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="product-details">
        <div className="container">
          <h1 className="product-details__title">
            {product.brand} {product.model}
          </h1>
          <div className="product-details__rating">
            <div className="product-details__rating-stars">
              <Rating size={18} value={rating} setValue={setRating} />
            </div>
            <div className="product-details__rating-count">{totalReviews}</div>
          </div>
          <ul className="product-details__tabs">
            {["About the product", "Characteristic", "Reviews", "Photo and video"].map((item, id) => (
              <li
                className={`product-details__tabs-item ${tabs === item ? "product-details__tabs-active" : ""}`}
                key={id}
                onClick={() => handleTabClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="product-details__body">
            {tabs === "About the product" && <AboutProduct product={product} />}
            {tabs === "Reviews" && (
              // Передаємо стан підрахунку відгуків
              <ReviewsProduct
                productId={product._id}
                totalReviews={totalReviews}
                setTotalReviews={setTotalReviews}
                setRating={setRating}
              />
            )}
            {tabs === "Characteristic" && <CharacteristicProduct product={product} />}
            {tabs === "Photo and video" && <PhotoVideoProduct />}
          </div>
        </div>
      </section>
    </>
  );
};

export { ProductPage };
