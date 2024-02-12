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
            style={{ ...style, display: "block", background: "black" }}
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
        <div className="slider-container banner_main ">
            <Slider {...settings}>
                <div className="banner_main-slider-item-1">
                    <h1 className="banner_main-title">Phantom 4 Pro V2.0</h1>
                    <p className="banner_main-descr">Featuring a 1-inch CMOS sensor that can shoot 4K/60fps videos and
                        20MP
                        photos, the Phantom 4 Pro V2.0 grants filmmakers absolute creative freedom. A wide array of
                        intelligent features makes flying that much easier. The Phantom 4 Pro V2.0 is a complete aerial
                        imaging solution, designed for the professional creator.
                    </p>
                    <img className="banner_main-img" src="https://content.rozetka.com.ua/goods/images/original/372992054.jpg" width="100" height="100" alt="Quadcopter"/>
                    <div className="banner_main-old-price">₴ 71 999</div>
                    <div className="banner_main-new-price">₴ 65 999</div>
                    <p className="banner_main-text">The offer is valid from 12.11 to 29.12</p>
                </div>
                <div className="banner_main-slider-item-2">
                    <h1 className="banner_main-title">Phantom 5 Pro V2.0</h1>
                    <p className="banner_main-descr">Featuring a 1-inch CMOS sensor that can shoot 4K/60fps videos and
                        20MP
                        photos, the Phantom 4 Pro V2.0 grants filmmakers absolute creative freedom. A wide array of
                        intelligent features makes flying that much easier. The Phantom 4 Pro V2.0 is a complete aerial
                        imaging solution, designed for the professional creator.
                    </p>
                    <img className="banner_main-img" src="https://content.rozetka.com.ua/goods/images/big_tile/378482958.png" width="100" height="100" alt=""/>
                    <div className="banner_main-old-price">₴ 71 999</div>
                    <div className="banner_main-new-price">₴ 65 999</div>
                    <p className="banner_main-text">The offer is valid from 12.11 to 29.12</p>
                </div>
                <div className="banner_main-slider-item-3">
                    <h1 className="banner_main-title">Phantom 6 Pro V2.0</h1>
                    <p className="banner_main-descr">Featuring a 1-inch CMOS sensor that can shoot 4K/60fps videos and
                        20MP
                        photos, the Phantom 4 Pro V2.0 grants filmmakers absolute creative freedom. A wide array of
                        intelligent features makes flying that much easier. The Phantom 4 Pro V2.0 is a complete aerial
                        imaging solution, designed for the professional creator.
                    </p>
                    <img className="banner_main-img" src="https://content2.rozetka.com.ua/goods/images/big/261571768.jpg" width="100" height="100" alt=""/>
                    <div className="banner_main-old-price">₴ 71 999</div>
                    <div className="banner_main-new-price">₴ 65 999</div>
                    <p className="banner_main-text">The offer is valid from 12.11 to 29.12</p>
                </div>
            </Slider>
        </div>
    );
}


export default BannerMain;