import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCompare } from "../../../store/slices/compareSlice";

const CatalogProductList = () => {
  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  let productItems = [];

  products.forEach((product) => {
    product.colors.forEach((color) => {
      const cloneProduct = JSON.parse(JSON.stringify(product));
      delete cloneProduct.colors;

      const productItem = { ...cloneProduct, color };
      productItem.fullName = product.brand + " " + product.model + " " + color.color;
      productItem.index = product._id + color.color;

      productItems.push(productItem);
    });
  });

  return (
    <ul className="product-list">
      {productItems.map((productItem) => (
        <li className="product-list__item" key={productItem.index}>
          {productItem.fullName}
          <button
            onClick={() => {
              dispatch(addToCompare(productItem));
            }}
            className="primary-btn"
          >
            Add to compare
          </button>
        </li>
      ))}
    </ul>
  );
};

export { CatalogProductList };
