import React from "react";
import { useSelector } from "react-redux";
import { GalleryProduct } from "../GalleryProduct";
import { ChooseColor } from "../ChooseColor";
import { BuyProduct } from "../BuyProduct";

import { ReactComponent as AboutDiagonalIcon } from "../../../../assets/images/product-icons/Diagonal.svg";
import { ReactComponent as AboutMainCameraIcon } from "../../../../assets/images/product-icons/Camera.svg";
import { ReactComponent as AboutFrontCameraIcon } from "../../../../assets/images/product-icons/front-camera.svg";
import { ReactComponent as AboutProcessorIcon } from "../../../../assets/images/product-icons/Hardware.svg";
import { ReactComponent as AboutMemoryIcon } from "../../../../assets/images/product-icons/Memory.svg";

const ProductTablets = ({ product }) => {
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
            {product.specifications.display?.display_size && (
              <div className="info-details__characteristics-item">
                <AboutDiagonalIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">display_size</div>
                  <span>{product.specifications.display.display_size}</span>
                </div>
              </div>
            )}
            {product.specifications.camera?.main_camera && (
              <div className="info-details__characteristics-item">
                <AboutMainCameraIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Main camera</div>
                  <span>{product.specifications.camera.main_camera}</span>
                </div>
              </div>
            )}
            {product.specifications.camera?.front_camera && (
              <div className="info-details__characteristics-item">
                <AboutFrontCameraIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Front camera</div>
                  <span>{product.specifications.camera.front_camera}</span>
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
                <AboutMemoryIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">RAM</div>
                  <span>{product.specifications.memory?.RAM}</span>
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

export { ProductTablets };
