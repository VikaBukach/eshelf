import React from "react";
import { fetchDataOfProducts } from "../../../../store/slices/productsSlice";
import ProductListHomePage from "../../ProductListHomePage/ProductListHomePage";

function TopProduct() {
  return (
    <ProductListHomePage
      title="Top product"
      category="tablets"
      initialItemsToShow={5}
      fetchDataOfProducts={() => fetchDataOfProducts("tablets")}
    />
  );
}

export default TopProduct;
