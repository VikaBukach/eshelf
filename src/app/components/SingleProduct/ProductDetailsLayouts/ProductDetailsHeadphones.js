import React from "react";
import { CharacteristicBuy } from "../CharacteristicBuy";

const ProductDetailsHeadphones = ({ product }) => {

  return (
    <div className="characteristic-body">
      <div className="characteristic-body__info">
        <div className="characteristic-body__title">
          Specifications&nbsp;&nbsp;&mdash;&nbsp;&nbsp;<span>Headphones </span>
          <span>{product.brand} </span>
          <span>{product.model}</span>
        </div>

        {product.specifications && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Details</h3>
            <dl className="characteristic-body__list">
              {product.specifications?.type && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Type</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.type}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications?.noise_cancelling && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Noise cancelling</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.noise_cancelling}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications?.wireless && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">wireless</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.wireless === true ? "true" : "false"}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications?.bluetooth_version && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Bluetooth version</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.bluetooth_version}</li>
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
              {product.specifications?.quick_charge && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Quick charge</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.quick_charge}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications?.colors_available && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Colors available</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      {product.specifications.colors_available.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
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

export { ProductDetailsHeadphones };
