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
      // category="smartphones"
      category="especiallyforyou"
      initialItemsToShow={5}
      // fetchDataOfProducts={() => fetchDataOfProducts("smartphones")}
      // Тут замінила стару функцію на нову (Марина)
      fetchDataOfProducts={() => (loadOnePageOfProducts({ collection: "especiallyforyou", limit: 10, page: 1 }))}
    />
  );
}

export default EspeciallyForYou;
