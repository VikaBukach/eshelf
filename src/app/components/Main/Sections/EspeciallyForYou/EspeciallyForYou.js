import React from "react";
import "./EspeciallyForYou.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { loadOnePageOfProducts } from "../../../../store/slices/productsSlice";
import ProductListHomePage from "../../ProductListHomePage/ProductListHomePage";

function EspeciallyForYou() {
  return (
    <ProductListHomePage
      title="Espessially for you"
      // category="tvs"
      initialItemsToShow={5}
    />
  );
}

export default EspeciallyForYou;
