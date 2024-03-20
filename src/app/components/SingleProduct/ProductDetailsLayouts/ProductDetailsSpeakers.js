import React from "react";
import { CharacteristicBuy } from "../CharacteristicBuy";

const ProductDetailsSpeakers = ({ product }) => {
  return (
    <div className="characteristic-body">
      <div className="characteristic-body__info">
        <div className="characteristic-body__title">
          Specifications&nbsp;&nbsp;&mdash;&nbsp;&nbsp;<span>Tablet </span>
          <span>{product.brand} </span>
          <span>{product.model}</span>
        </div>

        {product.specifications && (
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
            </dl>
          </section>
        )}

        {product?.guarantee && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Guarantee</h3>
            <dl className="characteristic-body__list">
              {
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Period</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.guarantee}</li>
                    </ul>
                  </dd>
                </div>
              }
            </dl>
          </section>
        )}
      </div>

      <CharacteristicBuy product={product} />
    </div>
  );
};

export { ProductDetailsSpeakers };
