import React from "react";
import { useSelector } from "react-redux";

import { GalleryProduct } from "../GalleryProduct";
import { ChooseColor } from "../ChooseColor";
import { BuyProduct } from "../BuyProduct";

import { ReactComponent as AboutSensorIcon } from "../../../../assets/images/product-icons/Sensor.svg";
import { ReactComponent as AboutPowerIcon } from "../../../../assets/images/product-icons/Power.svg";
import { ReactComponent as AboutSizeIcon } from "../../../../assets/images/product-icons/Diagonal.svg";
import { ReactComponent as AboutCountIcon } from "../../../../assets/images/product-icons/Count.svg";
import { ReactComponent as AboutConnectIcon } from "../../../../assets/images/product-icons/Connect.svg";

const ProductMouses = ({ product }) => {
  const activeColorIndex = useSelector((state) => state.product.activeColorIndex);
  const activeMemoryIndex = useSelector((state) => state.product.activeMemoryIndex);

  return (
    <div className="product-details-body">
      <GalleryProduct product={product} />

      <div className="product-details-body__info info-details">
        {product.colors[activeColorIndex]?.products && (
          <div className="info-details__wrap">
            <div className="info-details__header">
              Details
              {product.colors[activeColorIndex].products[activeMemoryIndex]?.article && (
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
            {product.specifications.characteristics?.sensor_type && (
              <div className="info-details__characteristics-item">
                <AboutSensorIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Sensor</div>
                  <span>{product.specifications.characteristics.sensor_type}</span>
                </div>
              </div>
            )}
            {product.specifications.characteristics?.power_source && (
              <div className="info-details__characteristics-item">
                <AboutPowerIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Power source</div>
                  <span>{product.specifications.characteristics.power_source}</span>
                </div>
              </div>
            )}
            {product.specifications.characteristics?.dimension && (
              <div className="info-details__characteristics-item">
                <AboutSizeIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Dimension</div>
                  <span>{product.specifications.characteristics.dimension}</span>
                </div>
              </div>
            )}
            {product.specifications.features?.quantity_of_buttons && (
              <div className="info-details__characteristics-item">
                <AboutCountIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Quantity of buttons</div>
                  <span>{product.specifications.features.quantity_of_buttons}</span>
                </div>
              </div>
            )}
            {product.colors[activeColorIndex].products[activeMemoryIndex]?.connection && (
              <div className="info-details__characteristics-item">
                <AboutConnectIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Connection</div>
                  <span>{product.colors[activeColorIndex].products[activeMemoryIndex].connection}</span>
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

export { ProductMouses };
