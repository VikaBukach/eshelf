import React from "react";
import { useSelector } from "react-redux";
import { GalleryProduct } from "../GalleryProduct";
import { ChooseColor } from "../ChooseColor";
import { BuyProduct } from "../BuyProduct";

import { ReactComponent as AboutDiagonalIcon } from "../../../../assets/images/product-icons/Diagonal.svg";
import { ReactComponent as AboutMemoryIcon } from "../../../../assets/images/product-icons/Memory.svg";
import { ReactComponent as AboutCameraIcon } from "../../../../assets/images/product-icons/Camera.svg";
import { ReactComponent as AboutMatrixIcon } from "../../../../assets/images/product-icons/Matrix.svg";

const ProductTablets = ({ product }) => {
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
                <AboutDiagonalIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Display size</div>
                  <span>{product.specifications.display_size}</span>
                </div>
              </div>
            )}
            {product.specifications?.storage && (
              <div className="info-details__characteristics-item">
                <AboutMemoryIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Storage</div>
                  <span>{product.specifications.storage}</span>
                </div>
              </div>
            )}
            {product.specifications?.RAM && (
              <div className="info-details__characteristics-item">
                <AboutMatrixIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">RAM</div>
                  <span>{product.specifications.RAM}</span>
                </div>
              </div>
            )}
            {product.specifications?.camera && (
              <div className="info-details__characteristics-item">
                <AboutCameraIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Camera</div>
                  <span>{product.specifications.camera}</span>
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
