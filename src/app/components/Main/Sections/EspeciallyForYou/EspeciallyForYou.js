import React from "react";
import "./EspeciallyForYou.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchDataOfProducts } from "../../../../store/slices/productsSlice";
import ProductListHomePage from "../../ProductListHomePage/ProductListHomePage";

function EspeciallyForYou() {
  return (
    <ProductListHomePage
      title="Espessially for you"
      // category="smartphones"
      category="especiallyforyou"
      initialItemsToShow={5}
      // fetchDataOfProducts={() => fetchDataOfProducts("smartphones")}
      fetchDataOfProducts={() => fetchDataOfProducts("especiallyforyou")}
    />
  );
}

export default EspeciallyForYou;
