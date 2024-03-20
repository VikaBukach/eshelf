import React, { useEffect, useState } from "react";
import { ProductSmartphones } from "./ProductCategoryLayouts/ProductSmartphones";
import { ProductSmartwatches } from "./ProductCategoryLayouts/ProductSmartwatches";
import { ProductMonitors } from "./ProductCategoryLayouts/ProductMonitors";
import { ProductMouses } from "./ProductCategoryLayouts/ProductMouses";
import { ProductQuadcopters } from "./ProductCategoryLayouts/ProductQuadcopters";
import { ProductTv } from "./ProductCategoryLayouts/ProductTv";
import { ProductTablets } from "./ProductCategoryLayouts/ProductTablets";
import { ProductHeadphones } from "./ProductCategoryLayouts/ProductHeadphones";
import { ProductLaptops } from "./ProductCategoryLayouts/ProductLaptops";
import axios from "axios";
import { useSelector } from "react-redux";

const AboutProduct = ({ product }) => {
  let ProductComponent;

  switch (product.category) {
    case "smartphones":
      ProductComponent = ProductSmartphones;
      break;
    case "smartwatches":
      ProductComponent = ProductSmartwatches;
      break;
    case "monitors":
      ProductComponent = ProductMonitors;
      break;
    case "mouses":
      ProductComponent = ProductMouses;
      break;
    case "quadcopters":
      ProductComponent = ProductQuadcopters;
      break;
    case "televisions":
      ProductComponent = ProductTv;
      break;
    case "tablets":
      ProductComponent = ProductTablets;
      break;
    case "headphones":
      ProductComponent = ProductHeadphones;
      break;
    case "laptops":
      ProductComponent = ProductLaptops;
      break;
    default:
      ProductComponent = () => <div className="product-details-body">Unsupported product category</div>;
  }

  // Отримуємо обєкт користувача
  const user = useSelector((state) => state.user.data);

  useEffect(() => {
    let cancelToken = axios.CancelToken.source(); // створюємо токен скасування запиту
    // Робимо запит на створення нового перегляду
    const fetchData = async () => {
      try {
        const PORT = process.env.REACT_APP_PORT || 5000;

        const response = await axios.post(
          `http://localhost:${PORT}/postRevised`,
          {
            userEmail: user.email,
            productId: product?._id,
          },
          {
            cancelToken: cancelToken.token, // передаємо токен для скасування запиту
          }
        );

        // ловимо помилки
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message);
        }
      }
    };

    if (user) {
      fetchData();
    }

    // Скасовуємо запит при видаленні сторінки
    return () => {
      cancelToken.cancel("Operation canceled due to component unmount.");
    };
  }, [user, product]);

  return (
    <>
      <ProductComponent product={product} />
    </>
  );
};

export { AboutProduct };
