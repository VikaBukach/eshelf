import React from "react";
import BannerMain from "./Sections/Banner_main/Banner_main";
import TopBrands from "./Sections/TopBrands/TopBrands";
import "./Main.scss";
import EspeciallyForYou from "./Sections/EspeciallyForYou/EspeciallyForYou";
import BannerTopProduct from "./Sections/BannerTopProduct/BannerTopProduct";
import PopularCategory from "./Sections/PopularCategory/PopularCategory";
import ContactForm from "./Sections/ContactForm/ContactForm";
// import TopProduct from "./Sections/TopProduct/TopProduct";
// import SalesWeek from "./Sections/SalesWeek/SalesWeek";

const Main = () => {
  return (
    <div className="container">
      <BannerMain />
      <TopBrands />
      <EspeciallyForYou />
      <BannerTopProduct />
      {/*<TopProduct/>*/}
      {/*<SalesWeek />*/}
      <PopularCategory />
        <ContactForm />
    </div>
  );
};

export default Main;
