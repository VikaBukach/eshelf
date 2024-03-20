import React from "react";
import {useNavigate} from "react-router-dom";
import Button from "../../Button/Button";
import "./BannerTopProduct.scss";
import Buttun_perple from "../../Button/Buttun_perple";

function BannerTopProduct({product}) {
    const navigate = useNavigate();

    return (
        <>
            <div className="banner_top-product-mobile">
                <h1 className="banner_top-product-mobile-title">iPhone 15 Pro Max Natural Titanium</h1>
                <img
                    className="banner_top-product-mobile-img"
                    src="img/topbanner/ip15mob.png"
                    alt="img"
                />
                <h4 className="banner_top-product-mobile-subtitle">
                    iPhone 15 Pro is forged from titanium and equipped with the revolutionary A17 Pro chip, a
                    customizable action button and an even more...
                </h4>
                <Button
                    btnClass="banner_top-product-mobile-pre-order-btn"
                    text={"Pre-order"}
                    />
            </div>

            <div className="banner_top-product-desktop">
                <img
                    className="banner_top-product-desktop-img"
                    src="img/topbanner/ip15.png"
                    alt=""
                />
                <div className="banner_top-product-desktop-info">
                    <h1 className="banner_top-product-desktop-title">iPhone 15 Pro Max Natural Titanium</h1>
                    <h4 className="banner_top-product-desktop-descr">
                        {" "}
                        iPhone 15 Pro is forged from titanium and equipped with the revolutionary A17 Pro chip,
                        a
                        customizable action button and an even more versatile Pro camera system.
                    </h4>
                    <p className="banner_top-product-desktop-long-descr">
                        The 6.1-inch2 Super Retina XDR display with ProMotion technology boosts the refresh rate
                        to
                        120Hz when you need exceptional graphics performance. With Dynamic Island, you'll have
                        notifications and Live Actions at your fingertips. In addition, the display is always
                        on, so the
                        lock screen remains visible and you don't even have to touch it to stay up to date.
                    </p>
                    <Buttun_perple
                        btnClass="banner_top-product-desktop-pre-order-btn"
                        text={"Pre-order"}
                        // onClick={() => navigate(`/smartphones/65cb5895f88b23255ef42f64/natural-titanium`)}/>
                        onClick={() => navigate(`/smartphones/65cb5895f88b23255ef42f64/black-titanium`)}/>
                </div>
            </div>
        </>
    );
}

export default BannerTopProduct;
