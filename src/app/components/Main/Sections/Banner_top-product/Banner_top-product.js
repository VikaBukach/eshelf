import React from 'react';
import Button from "../../Button/Button";
import "./Banner_top-product.scss";

function BannerTopProduct(props) {
    return (
        <div className="banner_top-product">
           <h1 className="banner_top-product-title">
               Apple Iphone 14
           </h1>
            <img className="banner_top-product-img" src="/img/Iphone_14.png" alt=""/>
            <h4 className="banner_top-product-subtitle">One of the main features of the iPhone 14 was supposed to be the absence of bangs, or reduction of them. In version 13...</h4>
            <Button
            btnClass="banner_top-product-pre-order-btn"
            text={'Pre-order'}

            />
        </div>
    );
}

export default BannerTopProduct;