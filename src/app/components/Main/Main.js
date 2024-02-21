import React from "react";
import BannerMain from "./Sections/Banner_main/Banner_main";
import Top_Brands from "./Sections/Top_Brands/Top_Brands";
import './Main.scss';
import EspeciallyForYou from "./Sections/Especially_for_you/Especially_for_you";


const Main = () => {
    return (
        <div className="container">
            <BannerMain />
            <Top_Brands />
            <EspeciallyForYou />
        </div>
    );
};

export default Main;