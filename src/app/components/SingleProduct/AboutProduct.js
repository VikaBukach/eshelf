import React from "react";
import { ProductSmartphones } from "./ProductCategoryLayouts/ProductSmartphones";
import { ProductSmartwatches } from "./ProductCategoryLayouts/ProductSmartwatches";
import { ProductMonitors } from "./ProductCategoryLayouts/ProductMonitors";
import { ProductMouses } from "./ProductCategoryLayouts/ProductMouses";
import { ProductQuadcopters } from "./ProductCategoryLayouts/ProductQuadcopters";
import { ProductTv } from "./ProductCategoryLayouts/ProductTv";
import { ProductTablets } from "./ProductCategoryLayouts/ProductTablets";
import { ProductHeadphones } from "./ProductCategoryLayouts/ProductHeadphones";
import { ProductLaptops } from "./ProductCategoryLayouts/ProductLaptops";
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

  return (
    <>
      <ProductComponent product={product} />
    </>
  );
};

export { AboutProduct };
