import React from "react";
import { useSelector } from "react-redux";

import { GalleryProduct } from "../GalleryProduct";
import { ChooseColor } from "../ChooseColor";
import { BuyProduct } from "../BuyProduct";

import { ReactComponent as AboutEarIcon } from "../../../../assets/images/product-icons/Ear.svg";
import { ReactComponent as AboutBluetoothIcon } from "../../../../assets/images/product-icons/Bluetooth.svg";
import { ReactComponent as AboutWeightIcon } from "../../../../assets/images/product-icons/Battery.svg";

const ProductHeadphones = ({ product }) => {
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
            {product.specifications.characteristics?.type_connection && (
              <div className="info-details__characteristics-item">
                <AboutEarIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Type</div>
                  <span>{product.specifications.characteristics.type_connection}</span>
                </div>
              </div>
            )}
            {product.specifications.characteristics?.bluetooth_version && (
              <div className="info-details__characteristics-item">
                <AboutBluetoothIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Bluetooth</div>
                  <span>{product.specifications.characteristics.bluetooth_version}</span>
                </div>
              </div>
            )}
            {product.specifications.characteristics?.battery_life && (
              <div className="info-details__characteristics-item">
                <AboutWeightIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Battery life</div>
                  <span>{product.specifications.characteristics?.battery_life}</span>
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

export { ProductHeadphones };
