import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner_main.scss';
import Arrow from "./Arrow/Arrow";

function BannerMain(props) {
    const slides = [
        {
            title: "Phantom 4 Pro V2.0",
            description: "Featuring a 1-inch CMOS sensor that can shoot 4K/60fps videos and 20MP photos the Phantom 4 Pro V2.0 grants filmmakers absolute creative freedom.  A wide array of intelligent features makes flying that much easier. The Phantom 4 Pro V2.0 is a complete aerial imaging solution, designed for the professional creator.",
            oldPrice: "₴ 71 999",
            newPrice: "₴ 65 999",
            validOffer: "The offer is valid from 12.11 to 29.12",
            imagePath: "/img/kisspng-mavic-pro-dji-phantom-4-pro-dji-phantom-4-pro-unma-dji-phantom-5b51f93fbeb6f3%201.png"
        },
        {
            title: "Phantom 5 Pro V2.5",
            description: "Featuring a 1-inch CMOS sensor that can shoot 4K/60fps videos and 20MP photos the Phantom 4 Pro V2.0 grants filmmakers absolute creative freedom.  A wide array of intelligent features makes flying that much easier. The Phantom 4 Pro V2.0 is a complete aerial imaging solution, designed for the professional creator.",
            oldPrice: "₴ 31 999",
            newPrice: "₴ 20 999",
            validOffer: "The offer is valid from 15.12 to 31.12",
            imagePath: "/img/kisspng-mavic-pro-dji-phantom-4-pro-dji-phantom-4-pro-unma-dji-phantom-5b51f93fbeb6f3%201.png"
        },
        {
            title: "Phantom 6 Pro V3.0",
            description: "Featuring a 1-inch CMOS sensor that can shoot 4K/60fps videos and 20MP photos the Phantom 4 Pro V2.0 grants filmmakers absolute creative freedom.  A wide array of intelligent features makes flying that much easier. The Phantom 4 Pro V2.0 is a complete aerial imaging solution, designed for the professional creator.",
            oldPrice: "₴ 99 999",
            newPrice: "₴ 77 999",
            validOffer: "The offer is valid from 12.11 to 29.12",
            imagePath: "/img/kisspng-mavic-pro-dji-phantom-4-pro-dji-phantom-4-pro-unma-dji-phantom-5b51f93fbeb6f3%201.png"
        },
    ]; //add sliders

    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="banner_main slider-container">
            <Slider {...settings} ref={sliderRef}>
                {slides.map((slide, index) => (
                    <div key={index} className={`banner_main-slider-item banner_main-slider-item-${index + 1}`}>
                        <h1 className="banner_main-title">{slide.title}</h1>
                        <h4 className="banner_main-descr">{slide.description}</h4>
                        <Arrow direction="next" onClick={() => sliderRef.current.slickNext()}/>
                        <div className="banner_main-img-container">
                            <img className="banner_main-img" src={slide.imagePath} alt="Quadcopter"/>
                        </div>
                        <Arrow direction="prev" onClick={() => sliderRef.current.slickPrev()} />
                        <div className="banner_main-price">
                            <div className="banner_main-old-price">{slide.oldPrice}</div>
                            <div className="banner_main-new-price">{slide.newPrice}</div>
                        </div>
                        <p className="banner_main-text">{slide.validOffer}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default BannerMain;
