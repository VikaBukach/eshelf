import React from "react";
import { useSelector } from "react-redux";

const CatalogProductList = () => {
  const products = useSelector((state) => state.products.data);
  const filteredProducts = useSelector(state => state.filteredProducts.data);

  const productListToDisplay = filteredProducts.length !== 0 ? filteredProducts : products;

  let productItems = [];

  productListToDisplay.forEach((product) => {
    product.colors.forEach((color) => {
      const productItem = {};
      productItem.fullName = product.brand + " " + product.model + " " + color.color;
      productItem.index = product._id + color.color;

      productItems.push(productItem);
    });
  });

  return (
      <ul className="product-list">
        {productItems.map((productItem) => (
          <li className="product-list__item" key={productItem.index}>{productItem.fullName}</li>
        ))}
      </ul>
  );
};

export { CatalogProductList };
