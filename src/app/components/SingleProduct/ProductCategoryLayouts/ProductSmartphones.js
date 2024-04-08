import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveMemoryIndex } from "../../../store/slices/singleProductSlice";

import { ReactComponent as AboutBatteryIcon } from "../../../../assets/images/product-icons/Diagonal.svg";
import { ReactComponent as AboutMainCameraIcon } from "../../../../assets/images/product-icons/Camera.svg";
import { ReactComponent as AboutFrontCameraIcon } from "../../../../assets/images/product-icons/front-camera.svg";
import { ReactComponent as AboutBatteryElementIcon } from "../../../../assets/images/product-icons/Battery.svg";
import { ReactComponent as AboutFrequencyIcon } from "../../../../assets/images/product-icons/Mobile.svg";
import { ReactComponent as AboutProcessorIcon } from "../../../../assets/images/product-icons/Hardware.svg";

import { BuyProduct } from "../BuyProduct";
import { GalleryProduct } from "../GalleryProduct";
import { ChooseColor } from "../ChooseColor";

const ProductSmartphones = ({ product }) => {
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
              Select memory
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
                  {item.capacity}
                </div>
              ))}
            </div>
          </div>
        )}

        <ChooseColor product={product} />

        <div className="info-details__wrap">
          <div className="info-details__header">Characteristics</div>
          <div className="info-details__characteristics-block">
            {product.specifications.display?.screen_diagonal && (
              <div className="info-details__characteristics-item">
                <AboutBatteryIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Screen diagonal</div>
                  <span>{product.specifications.display.screen_diagonal}</span>
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
            {product.specifications.battery?.capacity && (
              <div className="info-details__characteristics-item">
                <AboutBatteryElementIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Battery capacity</div>
                  <span>{product.specifications.battery.capacity}</span>
                </div>
              </div>
            )}
            {product.specifications.display?.frequency && (
              <div className="info-details__characteristics-item">
                <AboutFrequencyIcon className="info-details__characteristics-icon" />
                <div className="info-details__characteristics-wrap">
                  <div className="info-details__characteristics-title">Display frequency</div>
                  <span>{product.specifications.display.frequency}</span>
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
          </div>
        </div>
        <BuyProduct product={product} />
      </div>
    </div>
  );
};

export { ProductSmartphones };
