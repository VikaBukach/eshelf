import React from "react";
import Button from "../../Button/Button";
import "./BannerTopProduct.scss";
import Buttun_perple from "../../Button/Buttun_perple";

function BannerTopProduct(props) {
  return (
    <>
      <div className="banner_top-product-mobile">
        <h1 className="banner_top-product-mobile-title">Apple Iphone 14</h1>
        <img className="banner_top-product-mobile-img" src="/img/Iphone_14.png" alt="" />
        <h4 className="banner_top-product-mobile-subtitle">
          One of the main features of the iPhone 14 was supposed to be the absence of bangs, or reduction of them. In
          version 13...
        </h4>
        <Button btnClass="banner_top-product-mobile-pre-order-btn" text={"Pre-order"} />
      </div>

      <div className="banner_top-product-desktop">
        <img className="banner_top-product-desktop-img" src="/img/Iphone_14.png" alt="" />
        <div className="banner_top-product-desktop-info">
          <h1 className="banner_top-product-desktop-title">Apple Iphone 14</h1>
          <h4 className="banner_top-product-desktop-descr">
            {" "}
            One of the main features of the iPhone 14 was supposed to be the absence of bangs, or reduction of them. In
            version 13, Apple narrowed it down a bit, so it was assumed that next year the company would get rid of the
            bangs, turning to a "hole" camera design.
          </h4>
          <p className="banner_top-product-desktop-long-descr">
            One of the main features of the iPhone 14 was supposed to be the absence of bangs, or reduction of them. In
            version 13, Apple narrowed it down a bit, so it was assumed that next year the company would get rid of the
            bangs, turning to a "hole" camera design. This is the kind that Android manufacturers have been using for
            several years now. Information about future changes in the novelty was shared by analyst Min-Chi Kuo.
          </p>
          <Buttun_perple btnClass="banner_top-product-desktop-pre-order-btn" text={"Pre-order"} />
        </div>
      </div>
    </>
  );
}

export default BannerTopProduct;
