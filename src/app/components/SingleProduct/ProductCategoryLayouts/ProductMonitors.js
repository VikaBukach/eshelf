import React from "react";
import { useSelector } from "react-redux";

import { GalleryProduct } from "../GalleryProduct";
import { ChooseColor } from "../ChooseColor";
import { BuyProduct } from "../BuyProduct";

import { ReactComponent as AboutDiagonalIcon } from "../../../../assets/images/product-icons/Diagonal.svg";
import { ReactComponent as AboutFrequencyIcon } from "../../../../assets/images/product-icons/Mobile.svg";
import { ReactComponent as AboutMatrixIcon } from "../../../../assets/images/product-icons/Matrix.svg";
import { ReactComponent as AboutScreenIcon } from "../../../../assets/images/product-icons/screen-full.svg";
import { ReactComponent as AboutBrightnessIcon } from "../../../../assets/images/product-icons/Brightness.svg";
import { ReactComponent as AboutContrastIcon } from "../../../../assets/images/product-icons/Contrast.svg";

const ProductMonitors = ({ product }) => {
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
            {product.specifications.display?.display_diagonal && (
              <div className="info-details__characteristics-item">
                <AboutDiagonalIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Diagonal</div>
                  <span>{product.specifications.display.display_diagonal}</span>
                </div>
              </div>
            )}
            {product.specifications.display?.frequency && (
              <div className="info-details__characteristics-item">
                <AboutFrequencyIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Frequency</div>
                  <span>{product.specifications.display.frequency}</span>
                </div>
              </div>
            )}
            {product.specifications.display?.display_matrix_type && (
              <div className="info-details__characteristics-item">
                <AboutMatrixIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Matrix type</div>
                  <span>{product.specifications.display?.display_matrix_type}</span>
                </div>
              </div>
            )}
            {product.specifications.display?.display_resolution && (
              <div className="info-details__characteristics-item">
                <AboutScreenIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Resolution</div>
                  <span>{product.specifications.display.display_resolution}</span>
                </div>
              </div>
            )}
            {product.specifications.display?.display_brightness && (
              <div className="info-details__characteristics-item">
                <AboutBrightnessIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Brightness</div>
                  <span>{product.specifications.display.display_brightness}</span>
                </div>
              </div>
            )}
            {product.specifications.display?.display_contrast && (
              <div className="info-details__characteristics-item">
                <AboutContrastIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Contrast</div>
                  <span>{product.specifications.display?.display_contrast}</span>
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

export { ProductMonitors };
