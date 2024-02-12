import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner_main.scss';

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray" }}
            onClick={onClick}
        />
    );
}

function BannerMain(props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="banner_main slider-container">
            <Slider {...settings}>
                <div className=" banner_main-slider-item banner_main-slider-item-1">
                    <h1 className="banner_main-title">Phantom 4 Pro V2.0</h1>
                    <p className="banner_main-descr">Featuring a 1-inch CMOS sensor that can shoot 4K/60fps videos and
                        20MP photos...</p>
                    <div className="banner_main-img">
                        <img
                             src="/img/kisspng-mavic-pro-dji-phantom-4-pro-dji-phantom-4-pro-unma-dji-phantom-5b51f93fbeb6f3%201.png"
                             alt="Quadcopter"/>
                    </div>
                    <div className="banner_main-price">
                        <div className="banner_main-old-price">₴ 71 999</div>
                        <div className="banner_main-new-price">₴ 65 999</div>
                    </div>
                    <p className="banner_main-text">The offer is valid from 12.11 to 29.12</p>
                </div>
                <div className="banner_main-slider-item banner_main-slider-item-2">
                    <h1 className="banner_main-title">Phantom 5 Pro V2.5</h1>
                    <p className="banner_main-descr">Featuring a 1-inch CMOS sensor that can shoot 4K/60fps videos and
                        20MP photos...</p>
                    <div className="banner_main-img">
                        <img
                            src="/img/kisspng-mavic-pro-dji-phantom-4-pro-dji-phantom-4-pro-unma-dji-phantom-5b51f93fbeb6f3%201.png"
                            alt="Quadcopter"/>
                    </div>
                    <div className="banner_main-price">
                        <div className="banner_main-old-price">₴ 31 999</div>
                        <div className="banner_main-new-price">₴ 20 999</div>
                    </div>
                    <p className="banner_main-text">The offer is valid from 15.12 to 31.12</p>
                </div>
                <div className="banner_main-slider-item banner_main-slider-item-3">
                    <h1 className="banner_main-title">Phantom 6 Pro V3.0</h1>
                    <p className="banner_main-descr">Featuring a 1-inch CMOS sensor that can shoot 4K/60fps videos and
                        20MP photos...</p>
                    <div className="banner_main-img">
                        <img
                            src="/img/kisspng-mavic-pro-dji-phantom-4-pro-dji-phantom-4-pro-unma-dji-phantom-5b51f93fbeb6f3%201.png"
                            alt="Quadcopter"/>
                    </div>
                    <div className="banner_main-price">
                        <div className="banner_main-old-price">₴ 99 999</div>
                        <div className="banner_main-new-price">₴ 77 999</div>
                    </div>
                    <p className="banner_main-text">The offer is valid from 12.11 to 29.12</p>
                </div>
            </Slider>

        </div>
    );
}


export default BannerMain;