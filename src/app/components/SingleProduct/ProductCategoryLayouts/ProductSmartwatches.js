import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GalleryProduct } from "../GalleryProduct";
import { ChooseColor } from "../ChooseColor";
import { BuyProduct } from "../BuyProduct";
import { setActiveMemoryIndex } from "../../../store/slices/singleProductSlice";

import { ReactComponent as AboutBatteryIcon } from "../../../../assets/images/product-icons/Diagonal.svg";
import { ReactComponent as AboutFrontCameraIcon } from "../../../../assets/images/product-icons/front-camera.svg";
import { ReactComponent as AboutBatteryElementIcon } from "../../../../assets/images/product-icons/Battery.svg";
import { ReactComponent as AboutFrequencyIcon } from "../../../../assets/images/product-icons/Mobile.svg";
import { ReactComponent as AboutProcessorIcon } from "../../../../assets/images/product-icons/Hardware.svg";
import { ReactComponent as AboutMemoryIcon } from "../../../../assets/images/product-icons/Memory.svg";

const ProductSmartwatches = ({ product }) => {
  const activeColorIndex = useSelector((state) => state.product.activeColorIndex);
  const activeMemoryIndex = useSelector((state) => state.product.activeMemoryIndex);
  const dispatch = useDispatch();

  const handleMemoryClick = (index) => {
    dispatch(setActiveMemoryIndex(index));
  };

  return (
    <div className="product-details-body">
      <GalleryProduct product={product} />

      <div className="product-details-body__info info-details">
        {product.colors[activeColorIndex]?.products && (
          <div className="info-details__wrap">
            <div className="info-details__header">
              Select Sizes
              {product.colors[activeColorIndex].products[activeMemoryIndex].article && (
                <span className="info-details__article">
                  Code: {product.colors[activeColorIndex].products[activeMemoryIndex].article}
                </span>
              )}
            </div>
            <div className="info-details__memory-block">
              {product.colors[activeColorIndex].products.map((item, i) => (
                <div
                  key={i}
                  onClick={() => handleMemoryClick(i)}
                  className={`info-details__memory-item ${i === activeMemoryIndex ? "info-details__memory-active" : ""}`}
                >
                  {item.case_size}
                </div>
              ))}
            </div>
          </div>
        )}

        <ChooseColor product={product} />

        <div className="info-details__wrap">
          <div className="info-details__header">Characteristics</div>
          <div className="info-details__characteristics-block">
            {product.specifications.display?.resolution && (
              <div className="info-details__characteristics-item">
                <AboutBatteryIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Display resolution</div>
                  <span>{product.specifications.display.resolution}</span>
                </div>
              </div>
            )}
            {product.specifications.memory?.memory && (
              <div className="info-details__characteristics-item">
                <AboutMemoryIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Memory</div>
                  <span>{product.specifications.memory.memory}</span>
                </div>
              </div>
            )}
            {product.specifications.water_resistant?.swimproof && (
              <div className="info-details__characteristics-item">
                <AboutFrontCameraIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Water resistant</div>
                  <span>{product.specifications.water_resistant?.swimproof}</span>
                </div>
              </div>
            )}
            {product.specifications.battery_capacity?.capacity && (
              <div className="info-details__characteristics-item">
                <AboutBatteryElementIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Battery capacity</div>
                  <span>{product.specifications.battery_capacity.capacity}</span>
                </div>
              </div>
            )}
            {product.specifications.processor?.matrix_type && (
              <div className="info-details__characteristics-item">
                <AboutProcessorIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Processor</div>
                  <span>{product.specifications.processor?.matrix_type}</span>
                </div>
              </div>
            )}
            {product.specifications.display?.display_matrix_type && (
              <div className="info-details__characteristics-item">
                <AboutFrequencyIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Matrix</div>
                  <span>{product.specifications.display.display_matrix_type}</span>
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

export { ProductSmartwatches };
