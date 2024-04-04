import React from "react";
import { useSelector } from "react-redux";
import { GalleryProduct } from "../GalleryProduct";
import { ChooseColor } from "../ChooseColor";
import { BuyProduct } from "../BuyProduct";

import { ReactComponent as AboutBatteryIcon } from "../../../../assets/images/product-icons/Battery.svg";
import { ReactComponent as AboutConnectIcon } from "../../../../assets/images/product-icons/Connect.svg";
import { ReactComponent as AboutPowerIcon } from "../../../../assets/images/product-icons/Speed.svg";
import { ReactComponent as AboutAudioIcon } from "../../../../assets/images/product-icons/Audio.svg";

const ProductSpeakers = ({ product }) => {
  const activeColorIndex = useSelector((state) => state.product.activeColorIndex);
  const activeMemoryIndex = useSelector((state) => state.product.activeMemoryIndex);

  return (
    <div className="product-details-body">
      <GalleryProduct product={product} />

      <div className="product-details-body__info info-details">
        {product.colors[activeColorIndex]?.products && (
          <div className="info-details__wrap">
            <div className="info-details__header">
              Main
              {product.colors[activeColorIndex].products[activeMemoryIndex].article && (
                <span className="info-details__article">
                  Code: {product.colors[activeColorIndex].products[activeMemoryIndex].article}
                </span>
              )}
            </div>
          </div>
        )}

        <ChooseColor product={product} />

        <div className="info-details__wrap">
          <div className="info-details__header">Characteristics</div>
          <div className="info-details__characteristics-block">
            {product.specifications?.battery_life && (
              <div className="info-details__characteristics-item">
                <AboutBatteryIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Battery life</div>
                  <span>{product.specifications.battery_life}</span>
                </div>
              </div>
            )}
            {product.specifications?.connectivity && (
              <div className="info-details__characteristics-item">
                <AboutConnectIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Connectivity</div>
                  <span>{product.specifications.connectivity}</span>
                </div>
              </div>
            )}
            {product.specifications?.output_power && (
              <div className="info-details__characteristics-item">
                <AboutPowerIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Output power</div>
                  <span>{product.specifications.output_power}</span>
                </div>
              </div>
            )}
            {product.specifications?.frequency_response && (
              <div className="info-details__characteristics-item">
                <AboutAudioIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Frequency response</div>
                  <span>{product.specifications.frequency_response}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <BuyProduct product={product} />
      </div>
    </div>
  );
};

export { ProductSpeakers };
