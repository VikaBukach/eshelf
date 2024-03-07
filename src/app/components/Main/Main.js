import React from "react";
import BannerMain from "./Sections/Banner_main/Banner_main";
import TopBrands from "./Sections/TopBrands/TopBrands";
import "./Main.scss";
import EspeciallyForYou from "./Sections/EspeciallyForYou/EspeciallyForYou";
import BannerTopProduct from "./Sections/BannerTopProduct/BannerTopProduct";
// import TopProduct from "./Sections/TopProduct/TopProduct";


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
