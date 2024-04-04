import React from "react";
import { useSelector } from "react-redux";

import { GalleryProduct } from "../GalleryProduct";
import { ChooseColor } from "../ChooseColor";
import { BuyProduct } from "../BuyProduct";

import { ReactComponent as AboutDisplayIcon } from "../../../../assets/images/product-icons/Display.svg";
import { ReactComponent as AboutProcessorIcon } from "../../../../assets/images/product-icons/Hardware.svg";
import { ReactComponent as AboutStorageIcon } from "../../../../assets/images/product-icons/Memory.svg";
import { ReactComponent as AboutRAMIcon } from "../../../../assets/images/product-icons/Matrix.svg";
import { ReactComponent as AboutGraphicIcon } from "../../../../assets/images/product-icons/screen-full.svg";
import { ReactComponent as AboutBatteryIcon } from "../../../../assets/images/product-icons/Battery.svg";

const ProductLaptops = ({ product }) => {
  const activeColorIndex = useSelector((state) => state.product.activeColorIndex);
  const activeMemoryIndex = useSelector((state) => state.product.activeMemoryIndex);

  return (
    <div className="product-details-body">
      <GalleryProduct product={product} />

      <div className="product-details-body__info info-details">
        {product.colors.products && (
          <div className="info-details__wrap">
            <div className="info-details__header">
              Main
              {product.colors.products[activeMemoryIndex].article && (
                <span className="info-details__article">
                  Code: {product.colors.products[activeMemoryIndex].article}
                </span>
              )}
            </div>
          </div>
        )}

        <ChooseColor product={product} />

        <div className="info-details__wrap">
          <div className="info-details__header">Characteristics</div>
          <div className="info-details__characteristics-block">
            {product.specifications?.display_size && (
              <div className="info-details__characteristics-item">
                <AboutDisplayIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Display size</div>
                  <span>{product.specifications.display_size}</span>
                </div>
              </div>
            )}
            {product.specifications?.processor && (
              <div className="info-details__characteristics-item">
                <AboutProcessorIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Processor</div>
                  <span>{product.specifications.processor}</span>
                </div>
              </div>
            )}
            {product.specifications?.storage && (
              <div className="info-details__characteristics-item">
                <AboutStorageIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Storage</div>
                  <span>{product.specifications.storage}</span>
                </div>
              </div>
            )}
            {product.specifications?.RAM && (
              <div className="info-details__characteristics-item">
                <AboutRAMIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">RAM</div>
                  <span>{product.specifications.RAM}</span>
                </div>
              </div>
            )}
            {product.specifications?.graphics && (
              <div className="info-details__characteristics-item">
                <AboutGraphicIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Graphics</div>
                  <span>{product.specifications.graphics}</span>
                </div>
              </div>
            )}
            {product.specifications?.battery_life && (
              <div className="info-details__characteristics-item">
                <AboutBatteryIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Battery life</div>
                  <span>{product.specifications.battery_life}</span>
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

export { ProductLaptops };
