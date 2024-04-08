import React from "react";
import { useSelector } from "react-redux";
import { GalleryProduct } from "../GalleryProduct";
import { ChooseColor } from "../ChooseColor";
import { BuyProduct } from "../BuyProduct";

import { ReactComponent as AboutDiagonalIcon } from "../../../../assets/images/product-icons/Diagonal.svg";
import { ReactComponent as AboutDisplayIcon } from "../../../../assets/images/product-icons/screen-full.svg";
import { ReactComponent as AboutRefreshIcon } from "../../../../assets/images/product-icons/Refresh.svg";
import { ReactComponent as AboutProcessorIcon } from "../../../../assets/images/product-icons/Hardware.svg";
import { ReactComponent as AboutAudioIcon } from "../../../../assets/images/product-icons/Audio.svg";
import { ReactComponent as AboutMemoryIcon } from "../../../../assets/images/product-icons/Memory.svg";

const ProductTv = ({ product }) => {
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
            {product.specifications.display?.screen_diagonal && (
              <div className="info-details__characteristics-item">
                <AboutDiagonalIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Screen diagonal</div>
                  <span>{product.specifications.display?.screen_diagonal}</span>
                </div>
              </div>
            )}
            {product.specifications.display?.display_resolution && (
              <div className="info-details__characteristics-item">
                <AboutDisplayIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Display resolution</div>
                  <span>{product.specifications.display.display_resolution}</span>
                </div>
              </div>
            )}
            {product.specifications.display?.frequency && (
              <div className="info-details__characteristics-item">
                <AboutRefreshIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Refresh rate</div>
                  <span>{product.specifications.display?.frequency}</span>
                </div>
              </div>
            )}
            {product.specifications.memory?.RAM && (
              <div className="info-details__characteristics-item">
                <AboutMemoryIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">RAM</div>
                  <span>{product.specifications.memory?.RAM}</span>
                </div>
              </div>
            )}
            {product.specifications.additional_options?.audio_system && (
              <div className="info-details__characteristics-item">
                <AboutAudioIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Audio system</div>
                  <span>{product.specifications.additional_options?.audio_system}</span>
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

export { ProductTv };
