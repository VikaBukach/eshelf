import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner_main.scss";
import Arrow from "../../Arrow/Arrow";

function BannerMain({ product }) {
  const data = useSelector((state) => state.products.data);

  const dispatch = useDispatch();

  const slides = [
    {
      title: " DJI Mavic 3 Pro V2",
      description:
        "Featuring a 1-inch CMOS sensor that can shoot 4K/60fps videos and 20MP photos the Phantom 3 Pro V2.0 grants filmmakers absolute creative freedom.  A wide array of intelligent features makes flying that much easier. The Phantom 4 Pro V2.0 is a complete aerial imaging solution, designed for the professional creator.",
      oldPrice: "3400 $",
      newPrice: "3299 $",
      validOffer: "The offer is valid from 25.03 to 29.04",
      imagePath:
        "/img/mainbanner/kisspng-mavic-pro-dji-phantom-4-pro-dji-phantom-4-pro-unma-dji-phantom-5b51f93fbeb6f3 1.png",
      imagePathDesktop: "/img/mainbanner/mavic-big.png",
    },
    {
      title: "iPhone 15 Pro Max",
      description:
        "As part of our efforts to reach carbon neutrality by 2030, iPhone 15 Pro and iPhone 15 Pro Max do not include a power adapter or EarPods. Included in the box is a USB‑C Charge Cable that supports fast charging and is compatible with USB‑C power adapters and computer ports.We encourage you to use any compatible USB‑C power adapter. If you need a new Apple power adapter or headphones, they are available for purchase",
      oldPrice: "999 $",
      newPrice: "988 $",
      validOffer: "The offer is valid from 25.03 to 29.04",
      imagePath: "/img/mainbanner/ipnall.png",
      imagePathDesktop: "/img/mainbanner/ipnallbig.png",
    },
    {
      title: "Apple Watch Series 9 GPS",
      description:
        "Apple Watch can do what your other devices can’t because it’s on your wrist. When you wear it, you get a fitness partner that measures all the ways you move, meaningful health insights, innovative safety features, and a connection to the people you care about most.",
      oldPrice: "399 $",
      newPrice: "378 $",
      validOffer: "The offer is valid from 05.03 to 31.03",
      imagePath: "/img/mainbanner/appwatchall.png",
      imagePathDesktop: "/img/mainbanner/applewatchbigbanner.png",
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
            <div className="arrow-svg-container-next">
              <Arrow direction="next" onClick={() => sliderRef.current.slickNext()} />
            </div>

            <div className="banner_main-img-container">
              <img className="banner_main-img" src={slide.imagePath} alt={slide.title} />
              <img className="banner_main-img-desktop" src={slide.imagePathDesktop} alt={slide.title} />
            </div>
            <div className="arrow-svg-container-prev">
              <Arrow direction="prev" onClick={() => sliderRef.current.slickPrev()} />
            </div>
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
