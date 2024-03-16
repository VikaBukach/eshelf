import React from "react";
import { useSelector } from "react-redux";
import { GalleryProduct } from "../GalleryProduct";
import { ChooseColor } from "../ChooseColor";
import { BuyProduct } from "../BuyProduct";

import { ReactComponent as AboutPowerIcon } from "../../../../assets/images/product-icons/Power.svg";
import { ReactComponent as AboutCountIcon } from "../../../../assets/images/product-icons/Count.svg";
import { ReactComponent as AboutSpeedIcon } from "../../../../assets/images/product-icons/Speed.svg";
import { ReactComponent as AboutBatteryIcon } from "../../../../assets/images/product-icons/Battery.svg";
import { ReactComponent as AboutTimeIcon } from "../../../../assets/images/product-icons/Time.svg";
import { ReactComponent as AboutHeightIcon } from "../../../../assets/images/product-icons/Height.svg";

const ProductQuadcopters = ({ product }) => {
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
            {product.specifications.characteristics?.max_speed && (
              <div className="info-details__characteristics-item">
                <AboutSpeedIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Max speed</div>
                  <span>{product.specifications.characteristics.max_speed}</span>
                </div>
              </div>
            )}
            {product.specifications.characteristics?.charging_time && (
              <div className="info-details__characteristics-item">
                <AboutPowerIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Charging time</div>
                  <span>{product.specifications.characteristics.charging_time}</span>
                </div>
              </div>
            )}
            {product.specifications.characteristics?.battery_capacity && (
              <div className="info-details__characteristics-item">
                <AboutBatteryIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Battery capacity</div>
                  <span>{product.specifications.characteristics.battery_capacity}</span>
                </div>
              </div>
            )}
            {product.specifications.characteristics?.flight_time && (
              <div className="info-details__characteristics-item">
                <AboutTimeIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Flight time</div>
                  <span>{product.specifications.characteristics.flight_time}</span>
                </div>
              </div>
            )}
            {product.specifications.characteristics?.flight_height && (
              <div className="info-details__characteristics-item">
                <AboutHeightIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Flight height</div>
                  <span>{product.specifications.characteristics.flight_height}</span>
                </div>
              </div>
            )}
            {product.specifications.characteristics?.range_of_action && (
              <div className="info-details__characteristics-item">
                <AboutCountIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Range of action</div>
                  <span>{product.specifications.characteristics.range_of_action}</span>
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

export { ProductQuadcopters };
