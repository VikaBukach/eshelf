import React from "react";

import { ReactComponent as AboutBatteryIcon } from "../../../assets/images/product-icons/Diagonal.svg";
import { ReactComponent as AboutMainCameraIcon } from "../../../assets/images/product-icons/Camera.svg";
import { ReactComponent as AboutFrontCameraIcon } from "../../../assets/images/product-icons/front-camera.svg";
import { ReactComponent as AboutBatteryElementIcon } from "../../../assets/images/product-icons/Battery.svg";
import { ReactComponent as AboutFrequencyIcon } from "../../../assets/images/product-icons/Mobile.svg";
import { ReactComponent as AboutProcessorIcon } from "../../../assets/images/product-icons/Hardware.svg";
import { ReactComponent as AboutComparingIcon } from "../../../assets/images/Balance.svg";
import { ReactComponent as AboutFavoritesIcon } from "../../../assets/images/Heart.svg";
import { ReactComponent as AboutVisaIcon } from "../../../assets/images/product-icons/visa.svg";
import { ReactComponent as AboutGooglePayIcon } from "../../../assets/images/product-icons/google-pay.svg";
import { ReactComponent as AboutApplePayIcon } from "../../../assets/images/product-icons/apple-pay.svg";
import { ReactComponent as AboutMastercardIcon } from "../../../assets/images/product-icons/mastercard.svg";

import { ButtonBuy } from "./ButtonBuy";
import { WeAccept } from "./WeAccept";

const AboutProduct = ({ product }) => {
  return (
    <div className="product-details-body">
      <div className="product-details-body__slider">
        <div className="product-details-body__img-big">
          <img src={`/${product.colors[0].images[0]}`} alt={`${product.model}`} />
        </div>
        <div className="product-details-body__img-wrap">
          {product.colors[0].images.map((image, i) => (
            <div key={i} className="product-details-body__img-small" onClick={() => {}}>
              <img src={`/${image}`} alt={`${product.model}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="product-details-body__info info-details">
        <div className="info-details__wrap">
          <div className="info-details__header">
            Select memory
            <span className="info-details__article">Code: 1816681</span>
          </div>
          <div className="info-details__memory-block">
            <div className="info-details__memory-item info-details__memory-active">32</div>
            <div className="info-details__memory-item">64</div>
            <div className="info-details__memory-item">128</div>
            <div className="info-details__memory-item">256</div>
          </div>
        </div>
        <div className="info-details__wrap">
          <div className="info-details__header">Choose color</div>
          <div className="info-details__color-block">
            <div className="info-details__color-item info-details__color-active"></div>
            <div className="info-details__color-item"></div>
            <div className="info-details__color-item"></div>
            <div className="info-details__color-item"></div>
          </div>
        </div>
        <div className="info-details__wrap">
          <div className="info-details__header">Characteristics</div>
          <div className="info-details__characteristics-block">
            {product.specifications.display.screen_diagonal && (
              <div className="info-details__characteristics-item">
                <AboutBatteryIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Screen diagonal</div>
                  <span>{product.specifications.display.screen_diagonal}</span>
                </div>
              </div>
            )}
            {product.specifications.camera.main_camera && (
              <div className="info-details__characteristics-item">
                <AboutMainCameraIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Main camera</div>
                  <span>{product.specifications.camera.main_camera}</span>
                </div>
              </div>
            )}
            {product.specifications.camera.front_camera && (
              <div className="info-details__characteristics-item">
                <AboutFrontCameraIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Front camera</div>
                  <span>{product.specifications.camera.front_camera}</span>
                </div>
              </div>
            )}
            {product.specifications.battery.capacity && (
              <div className="info-details__characteristics-item">
                <AboutBatteryElementIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Battery capacity</div>
                  <span>{product.specifications.battery.capacity}</span>
                </div>
              </div>
            )}
            {product.specifications.display.frequency && (
              <div className="info-details__characteristics-item">
                <AboutFrequencyIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Display frequency</div>
                  <span>{product.specifications.display.frequency}</span>
                </div>
              </div>
            )}
            {product.specifications.processor.type && (
              <div className="info-details__characteristics-item">
                <AboutProcessorIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Processor</div>
                  <span>{product.specifications.processor.type}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="info-details__wrap">
          <div className="info-details__header">Price</div>
          <div className="info-details__price-block">
            <div className="info-details__price-old">52 999 ₴</div>
            <div className="info-details__price-wrap">
              <div className="info-details__price-body">
                <div className="info-details__price">46 999 ₴</div>
                <ButtonBuy />
              </div>

              <div className="info-details__price-icon-wrap">
                <div className="info-details__price-icon">
                  <AboutComparingIcon />
                </div>
                <div className="info-details__price-icon">
                  <AboutFavoritesIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <WeAccept />
      </div>
    </div>
  );
};

export { AboutProduct };
