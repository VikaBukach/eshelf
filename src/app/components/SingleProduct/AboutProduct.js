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
import { ProductEReaders } from "./ProductCategoryLayouts/ProductEReaders";
import { ProductSpeakers } from "./ProductCategoryLayouts/ProductSpeakers";

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
    case "tv":
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
    case "e-readers":
      ProductComponent = ProductEReaders;
      break;
    case "portable-speakers":
      ProductComponent = ProductSpeakers;
      break;
    default:
      ProductComponent = () => <div className="product-details-body">Unsupported product category</div>;
  }

  // Отримуємо обєкт користувача
  const user = useSelector((state) => state.user.data);
  // Внeсені зміни по запиту на перегляд товару
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const fetchData = async () => {
      const productId = product?._id;
      localStorage.setItem("revised_token", productId);
      try {
        const PORT = process.env.REACT_APP_PORT || 5000;
        const REACT_APP_BACK_URL = process.env.REACT_APP_BACK_URL || "http://localhost";

        const response = await axios.post(
          `${REACT_APP_BACK_URL}:${PORT}/postRevised`,
          {
            userEmail: user.email,
            productId: product?._id,
          },
          {
            cancelToken: source.token, // Передаємо кенсел токен
          }
        );

        // ловимо помилки
      } catch (error) {
        console.log("Request canceled:", error.message);
      }
    };

    if (!localStorage.getItem("revised_token")) {
      fetchData();
    }

    // Скасовуємо запит при видаленні сторінки
    return () => {
      source.cancel("Request canceled by user");
      localStorage.removeItem("revised_token");
    };
  }, []);

  return (
    <>
      <ProductComponent product={product} />
    </>
  );
};

export { AboutProduct };
