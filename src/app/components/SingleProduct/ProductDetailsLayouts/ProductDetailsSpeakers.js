import React from "react";
import { useSelector } from "react-redux";
import { CharacteristicBuy } from "../CharacteristicBuy";

const ProductDetailsSpeakers = ({ product }) => {

  const activeColorIndex = useSelector((state) => state.product.activeColorIndex);

  return (
    <div className="characteristic-body">
      <div className="characteristic-body__info">
        <div className="characteristic-body__title">
          Specifications&nbsp;&nbsp;&mdash;&nbsp;&nbsp;<span>Tablet </span>
          <span>{product.brand} </span>
          <span>{product.model}</span>
        </div>

        {product.colors && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Color</h3>
            <dl className="characteristic-body__list">
              {product.colors[activeColorIndex]?.color && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Color</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.colors[activeColorIndex].color}</li>
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </section>
        )}

        {product?.specifications && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Details</h3>
            <dl className="characteristic-body__list">
              {product.specifications?.dimensions && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Dimensions</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.dimensions}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications?.wireless_range && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Wireless range</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.wireless_range}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications?.driver_size && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Driver size</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.driver_size}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications?.output_power && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Output power</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.output_power}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications?.frequency_response && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Frequency response</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.frequency_response}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications?.connectivity && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Connectivity</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.connectivity}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications?.battery_life && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Battery life</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.battery_life}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications?.weight && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Weight</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.weight}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications?.waterproof && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Waterproof</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.waterproof === true ? "true" : "false"}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications?.guarantee && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Guarantee</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.guarantee}</li>
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </section>
        )}
        {product.specifications?.characteristics && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Details</h3>
            <dl className="characteristic-body__list">
              {product.specifications.characteristics?.dimensions && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Dimensions</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.dimensions}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.wireless_range && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Wireless range</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.wireless_range}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.driver_size && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Driver size</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.driver_size}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.output_power && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Output power</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.output_power}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.frequency_response && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Frequency response</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.frequency_response}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.connectivity && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Connectivity</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.connectivity}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.battery_life && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Battery life</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.battery_life}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.weight && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Weight</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.weight}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.waterproof && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Waterproof</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.waterproof === true ? "true" : "false"}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.guarantee && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Guarantee</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.guarantee}</li>
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </section>
        )}
      </div>

      <CharacteristicBuy product={product} />
    </div>
  );
};

export { ProductDetailsSpeakers };
