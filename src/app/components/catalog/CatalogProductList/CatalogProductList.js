import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../ProductCard/ProductCard";

const CatalogProductList = () => {
  const products = useSelector((state) => state.products.data);

  let productItems = [];

  if (products && products.length !== 0) {
    products.forEach((product) => {
      const productItem = {};

      productItem.fullName = product.brand + " " + product.model + " " + product.colors.color;
      productItem.index = product._id;
      productItem.colorIndex = product.colors.color;
      productItem.image = product.colors.images[0];
      productItem.category = product.category;
      productItem.priceBy = product.colors.products[0].price;
      let l = product.colors.products.length - 1;
      productItem.priceTo = product.colors.products[l].price;
      productItem.discountPriceBy = product.colors.products[0].discount_price;

      productItems.push(productItem);
    });
  }

  return (
    <ul className="product-list">
      {productItems.map((productItem) => (
        <li className="product-list__item" key={productItem.index + productItem.colorIndex}>
          <ProductCard
            id={productItem.index}
            imageURL={productItem.image}
            category={productItem.category}
            title={productItem.fullName}
            price={productItem.priceBy}
            discountPrice={productItem.discountPriceBy}
            color={productItem.colorIndex}
          />
        </li>
      ))}
    </ul>
  );
};

export { CatalogProductList };
