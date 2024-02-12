import React from "react";
import BannerMain from "./Sections/Banner_main/Banner_main";
import Top_Brands from "./Sections/Top_Brands/Top_Brands";
import './Main.scss';


const Main = () => {
    return (
        <div className="container">
            <BannerMain />
            <Top_Brands />
        </div>
    );
};

export default Main;