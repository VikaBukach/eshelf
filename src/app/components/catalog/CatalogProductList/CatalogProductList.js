import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBaseFilteredProducts } from "../../../store/slices/filteredProductsSlice";
import { setFilteredProductsWithPrice } from "../../../store/slices/filteredProductsWithPriceSlice";
import { setProductsToResrtSorting } from "../../../store/slices/filterSortingSlice";
import ProductCard from "../../ProductCard/ProductCard";

const CatalogProductList = () => {
  const dispatch = useDispatch();
  const filteredProductsWithPrice = useSelector((state) => state.filteredProductsWithPrice.data);
  const products = useSelector((state) => state.products.data);

  // ------- ПОЧАТОК РОБОТИ
  // ------- Заповнення массивів BASE та PRICE при завантаженні сторінки, а також до до ресет-сховища

  useEffect(() => {
    dispatch(setBaseFilteredProducts(products));
    dispatch(setFilteredProductsWithPrice(products));
    dispatch(setProductsToResrtSorting(products));
  }, [products]);

  // ---------------------------------------------------------
  // --------------------ВРЕМЕННОЕ----------------------------
  // ---------------------------------------------------------
  let productItems = [];

  filteredProductsWithPrice.forEach((product) => {
    product.colors.forEach((color) => {
      const cloneProduct = JSON.parse(JSON.stringify(product));
      delete cloneProduct.colors;

      const productItem = { ...cloneProduct, color };
      productItem.fullName = product.brand + " " + product.model + " " + color.color;
      productItem.index = product._id + color.color;
      productItem.image = color.images[0];
      productItem.category = product.product;
      productItem.priceBy = color.products[0].price;
      let l = color.products.length - 1;
      productItem.priceTo = color.products[l].price;
      productItem.discountPriceBy = color.products[0].discount_price;

      // productItem.bool = product.test_boolean ? "Yes" : "No";
      // productItem.battary_capacity = product.specifications.battery.capacity;
      // productItem.capacity = [];
      // let b = color.products.forEach((product) => {
      //   productItem.capacity.push(product.capacity + " / ");
      // });

      productItems.push(productItem);
    });
  });
  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // ---------------------------------------------------------

  return (
    <ul className="product-list">
      {productItems.map((productItem) => (
        <li className="product-list__item" key={productItem.index}>
          <ProductCard
            id={productItem.index}
            imageURL={productItem.image}
            category={productItem.category}
            title={productItem.fullName}
            price={productItem.priceBy}
            discountPrice={productItem.discountPriceBy}
          />
        </li>
      ))}
    </ul>
  );
};

export { CatalogProductList };
