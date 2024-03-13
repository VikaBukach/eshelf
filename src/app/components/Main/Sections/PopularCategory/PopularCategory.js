import React, { useEffect, useRef } from "react";
import Button from "../../Button/Button";
import "./PopularCategory.scss";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Arrow from "../../Arrow/Arrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function PopularCategory() {
  const slides = [
    {
      title: "Smartphones",
      imagePathDesk: "/img/popularcategory/smartf.png",
    },
    {
      title: "Headphones",
      imagePathDesk: "/img/popularcategory/headphone.png",
    },
    {
      title: "Tablets",
      imagePathDesk: "/img/popularcategory/tablets.png",
    },
    {
      title: "Smartwatches",
      imagePathDesk: "/img/popularcategory/smartw.png",
    },
    {
      title: "TVs",
      imagePathDesk: "/img/popularcategory/tvs.png",
    },
    {
      title: "Quadrocopters",
      imagePathDesk: "/img/popularcategory/quadro.png",
    },
    {
      title: "Mouses",
      imagePathDesk: "/assets/images/Products/Mouses/img.png",
    },
  ];
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
  };

  return (
    <>
      <div className="popular_category">
        <h1 className="popular_category-title">Popular category </h1>
        <div className="popular_category-btn">
          <Button
            btnClass="popular_category-btn-smartpnones"
            // onClick={onClick}
            svg={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.9999 2.99939H6.99988C6.44759 2.99939 5.99988 3.4471 5.99988 3.99939V20.9994C5.99988 21.5517 6.44759 21.9994 6.99988 21.9994H16.9999C17.5522 21.9994 17.9999 21.5517 17.9999 20.9994V3.99939C17.9999 3.4471 17.5522 2.99939 16.9999 2.99939Z"
                  stroke="#8119B1"
                  stroke_linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M9.99976 20.0012H13.9998" stroke="#8119B1" stroke-linecap="round" />
              </svg>
            }
            text={"Smartphones"}
          />
          <Button
            btnClass="popular_category-btn-components"
            // onClick={onClick}
            svg={
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.0866 5H5.9C4.22 5 3.6 6.6 3.5 7.4V14.6C3.5 16.52 5.1 17 5.9 17H19.1C21.02 17 21.5 15.4 21.5 14.6V7.4C21.5 5.72 19.8911 5.1 19.0866 5Z"
                  stroke="#8119B1"
                />
                <path d="M14.3 17V20" stroke="#8119B1" />
                <path d="M10.7 17V20" stroke="#8119B1" />
                <path d="M8.29993 20H16.6999" stroke="#8119B1" stroke-linecap="round" />
              </svg>
            }
            text={"PC and components"}
          />

          <Button
            btnClass="popular_category-btn-tablets"
            // onClick={onClick}
            svg={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.4999 17.4996L21.4999 7.49957C21.4999 6.94729 21.0522 6.49957 20.4999 6.49957L3.49988 6.49957C2.94759 6.49957 2.49988 6.94729 2.49988 7.49957L2.49988 17.4996C2.49988 18.0519 2.94759 18.4996 3.49988 18.4996L20.4999 18.4996C21.0522 18.4996 21.4999 18.0519 21.4999 17.4996Z"
                  stroke="#8119B1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M9.99976 17H13.9998" stroke="#8119B1" stroke-linecap="round" />
              </svg>
            }
            text={"Tablets, photos, videos"}
          />
          <Button
            btnClass="popular_category-btn-others"
            // onClick={onClick}
            svg={
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.25 10.2914L12 17.0414L18.75 10.2914"
                  stroke="#8119B1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            text={"Others"}
          />
        </div>
        <ul className="popular_category-items">
          <li className="popular_category-item">
            <img className="popular_category-item-img" src="/img/popularcategory/smartf.png" alt="Smartphones" />
            <h4 className="popular_category-title">Smartphones</h4>
          </li>
          <li className="popular_category-item">
            <img className="popular_category-item-img" src="/img/popularcategory/headphone.png" alt="Headphones" />
            <h4 className="popular_category-title">Headphones</h4>
          </li>
          <li className="popular_category-item">
            <img className="popular_category-item-img" src="/img/popularcategory/tablets.png" alt="Tablets" />
            <h4 className="popular_category-title">Tablets</h4>
          </li>
          <li className="popular_category-item">
            <img className="popular_category-item-img" src="/img/popularcategory/smartw.png" alt="Smartwatches" />
            <h4 className="popular_category-title">Smartwatches</h4>
          </li>
          <li className="popular_category-item">
            <img className="popular_category-item-img" src="/img/popularcategory/tvs.png" alt="TVs" />
            <h4 className="popular_category-title">TVs</h4>
          </li>
          <li className="popular_category-item">
            <img className="popular_category-item-img" src="/img/popularcategory/quadro.png" alt="Quadrocopters" />
            <h4 className="popular_category-title">Quadrocopters</h4>
          </li>
        </ul>

        <div className="popular_category-items-carousel slider-container">
          <div className="popular_category-container">
            <h3 className="popular_category-title">See all</h3>
            <div className="especially_arrow-svg-container-prev">
              <Arrow direction="prev" onClick={() => sliderRef.current.slickPrev()} />
            </div>
          </div>
          <div className="popular_category-product-cont">
            <Slider {...settings} ref={sliderRef}>
              {slides.map((slide, index) => (
                <div key={index} className={`popular_category-slider-item-${index + 1} .unique-item-${index}`}>
                  <div className="card-product__image-container">
                    <img src={slide.imagePathDesk} alt={slide.title} />
                  </div>
                  <h1 className="popular_category-title-des">{slide.title}</h1>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularCategory;
