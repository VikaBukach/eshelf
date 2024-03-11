import React from "react";
import { ProductSmartphones } from "./ProductCategoryLayouts/ProductSmartphones";
import { ProductSmartwatches } from "./ProductCategoryLayouts/ProductSmartwatches";


const AboutProduct = ({ product }) => {
  let ProductComponent;

  switch (product.category) {
    case "smartphones":
      ProductComponent = ProductSmartphones;
      break;
    case "smartwatches":
      ProductComponent = ProductSmartwatches;
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
