import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../ProductCard/ProductCard";

const CatalogProductList = () => {
  const products = useSelector((state) => state.products.data);

  let productItems = [];

  if (products && products.length !== 0) {
    products.forEach((product) => {
      product.colors.forEach((color) => {
        const cloneProduct = JSON.parse(JSON.stringify(product));
        delete cloneProduct.colors;
        const productItem = { ...cloneProduct, color };
        productItem.fullName = product.brand + " " + product.model + " " + color.color;
        productItem.index = product._id;
        productItem.colorIndex = color.color;
        productItem.image = color.images[0];
        productItem.category = product.category;
        productItem.priceBy = color.products[0].price;
        let l = color.products.length - 1;
        productItem.priceTo = color.products[l].price;
        productItem.discountPriceBy = color.products[0].discount_price;
  
        productItems.push(productItem);
      });
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
