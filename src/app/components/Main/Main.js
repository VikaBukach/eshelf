import React from "react";
import BannerMain from "./Sections/Banner_main/Banner_main";
import TopBrands from "./Sections/TopBrands/TopBrands";
import "./Main.scss";
import EspeciallyForYou from "./Sections/Especially_for_you/Especially_for_you";
import BannerTopProduct from "./Sections/Banner_top-product/Banner_top-product";
// import TopProduct from "./Sections/TopProduct/TopProduct";
// import TopBrands from "./Sections/TopBrands/TopBrands";

const Main = () => {
  return (
    <div className="container">
      <BannerMain />
      <TopBrands />
      <EspeciallyForYou />
      <BannerTopProduct />
      {/*<TopProduct/>*/}
    </div>
  );
};

export default Main;
