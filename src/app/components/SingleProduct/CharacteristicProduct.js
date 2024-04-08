import React from "react";
import { ProductDetailsSmartphones } from "./ProductDetailsLayouts/ProductDetailsSmartphones";
import { ProductDetailsSmartwatches } from "./ProductDetailsLayouts/ProductDetailsSmartwatches";
import { ProductDetailsMonitors } from "./ProductDetailsLayouts/ProductDetailsMonitors";
import { ProductDetailsMouses } from "./ProductDetailsLayouts/ProductDetailsMouses";
import { ProductDetailsQuadcopters } from "./ProductDetailsLayouts/ProductDetailsQuadcopters";
import { ProductDetailsTv } from "./ProductDetailsLayouts/ProductDetailsTv";
import { ProductDetailsTablets } from "./ProductDetailsLayouts/ProductDetailsTablets";
import { ProductDetailsHeadphones } from "./ProductDetailsLayouts/ProductDetailsHeadphones";
import { ProductDetailsLaptops } from "./ProductDetailsLayouts/ProductDetailsLaptops";
import { ProductDetailsEReaders } from "./ProductDetailsLayouts/ProductDetailsEReaders";
import { ProductDetailsSpeakers } from "./ProductDetailsLayouts/ProductDetailsSpeakers";

const CharacteristicProduct = ({ product }) => {
  let DetailsComponent;

  switch (product.category) {
    case "smartphones":
      DetailsComponent = ProductDetailsSmartphones;
      break;
    case "smartwatches":
      DetailsComponent = ProductDetailsSmartwatches;
      break;
    case "monitors":
      DetailsComponent = ProductDetailsMonitors;
      break;
    case "mouses":
      DetailsComponent = ProductDetailsMouses;
      break;
    case "quadcopters":
      DetailsComponent = ProductDetailsQuadcopters;
      break;
    case "tvs":
      DetailsComponent = ProductDetailsTv;
      break;
    case "tablets":
      DetailsComponent = ProductDetailsTablets;
      break;
    case "headphones":
      DetailsComponent = ProductDetailsHeadphones;
      break;
    case "laptops":
      DetailsComponent = ProductDetailsLaptops;
      break;
    case "e-readers":
      DetailsComponent = ProductDetailsEReaders;
      break;
    case "portable-speakers":
      DetailsComponent = ProductDetailsSpeakers;
      break;
    default:
      DetailsComponent = () => <div className="characteristic-body">Unsupported product category</div>;
  }

  return (
    <>
      <DetailsComponent product={product} />
    </>
  );
};

export { CharacteristicProduct };
