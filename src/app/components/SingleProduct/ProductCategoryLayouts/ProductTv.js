import React from "react";
import { useSelector } from "react-redux";
import { GalleryProduct } from "../GalleryProduct";
import { ChooseColor } from "../ChooseColor";
import { BuyProduct } from "../BuyProduct";

import { ReactComponent as AboutDiagonalIcon } from "../../../../assets/images/product-icons/Diagonal.svg";
import { ReactComponent as AboutDisplayIcon } from "../../../../assets/images/product-icons/screen-full.svg";
import { ReactComponent as AboutTechnologyIcon } from "../../../../assets/images/product-icons/Display.svg";
import { ReactComponent as AboutRefreshIcon } from "../../../../assets/images/product-icons/Refresh.svg";
import { ReactComponent as AboutProcessorIcon } from "../../../../assets/images/product-icons/Hardware.svg";
import { ReactComponent as AboutAudioIcon } from "../../../../assets/images/product-icons/Audio.svg";

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
            {product.specifications?.display_size && (
              <div className="info-details__characteristics-item">
                <AboutDiagonalIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Display size</div>
                  <span>{product.specifications.display_size}</span>
                </div>
              </div>
            )}
            {product.specifications?.display_resolution && (
              <div className="info-details__characteristics-item">
                <AboutDisplayIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Display resolution</div>
                  <span>{product.specifications.display_resolution}</span>
                </div>
              </div>
            )}
            {product.specifications?.display_technology && (
              <div className="info-details__characteristics-item">
                <AboutTechnologyIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Display technology</div>
                  <span>{product.specifications.display_technology}</span>
                </div>
              </div>
            )}
            {product.specifications?.refresh_rate && (
              <div className="info-details__characteristics-item">
                <AboutRefreshIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Refresh rate</div>
                  <span>{product.specifications?.refresh_rate}</span>
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
            {product.specifications?.built_in_speakers && (
              <div className="info-details__characteristics-item">
                <AboutAudioIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Built in speakers</div>
                  <span>{product.specifications.built_in_speakers}</span>
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
