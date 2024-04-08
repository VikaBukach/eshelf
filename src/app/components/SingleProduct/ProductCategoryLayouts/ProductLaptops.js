import React from "react";
import { useSelector } from "react-redux";

import { GalleryProduct } from "../GalleryProduct";
import { ChooseColor } from "../ChooseColor";
import { BuyProduct } from "../BuyProduct";

import { ReactComponent as AboutDisplayIcon } from "../../../../assets/images/product-icons/Diagonal.svg";
import { ReactComponent as AboutProcessorIcon } from "../../../../assets/images/product-icons/Hardware.svg";
import { ReactComponent as AboutStorageIcon } from "../../../../assets/images/product-icons/Memory.svg";
import { ReactComponent as AboutHardwareIcon } from "../../../../assets/images/product-icons/Hardware.svg";

const ProductLaptops = ({ product }) => {
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
            {product.specifications.display?.screen_diagonal && (
              <div className="info-details__characteristics-item">
                <AboutDisplayIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Screen diagonal</div>
                  <span>{product.specifications?.display.screen_diagonal}</span>
                </div>
              </div>
            )}
            {product.specifications.processor?.type && (
              <div className="info-details__characteristics-item">
                <AboutProcessorIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Processor</div>
                  <span>{product.specifications.processor.type}</span>
                </div>
              </div>
            )}
            {product.specifications.memory?.RAM && (
              <div className="info-details__characteristics-item">
                <AboutStorageIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">RAM</div>
                  <span>{product.specifications.memory.RAM}</span>
                </div>
              </div>
            )}
            {product.specifications.additional_options?.video_card && (
              <div className="info-details__characteristics-item">
                <AboutHardwareIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Video card</div>
                  <span>{product.specifications.additional_options.video_card}</span>
                </div>
              </div>
            )}
            {product.specifications.operating_system?.type && (
              <div className="info-details__characteristics-item">
                <AboutHardwareIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Video card</div>
                  <span>{product.specifications.operating_system.type}</span>
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
