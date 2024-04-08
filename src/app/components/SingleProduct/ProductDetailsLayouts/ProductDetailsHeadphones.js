import React from "react";
import { CharacteristicBuy } from "../CharacteristicBuy";
import { useSelector } from "react-redux";

const ProductDetailsHeadphones = ({ product }) => {
  const activeColorIndex = useSelector((state) => state.product.activeColorIndex);
  return (
    <div className="characteristic-body">
      <div className="characteristic-body__info">
        <div className="characteristic-body__title">
          Specifications&nbsp;&nbsp;&mdash;&nbsp;&nbsp;<span>Headphones </span>
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
        {product.specifications?.characteristics && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Details</h3>
            <dl className="characteristic-body__list">
              {product.specifications.characteristics?.features && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Features</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.features}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.type_connection && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Type connection</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.type_connection}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.noise_cancelling && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Noise cancelling</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.noise_cancelling === true ? "true" : "false"}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.wireless && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">wireless</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.wireless === true ? "true" : "false"}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.bluetooth_version && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Bluetooth version</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.bluetooth_version}</li>
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
              {product.specifications.characteristics?.quick_charge && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Quick charge</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.quick_charge}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.range_of_action && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Range of action</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics?.range_of_action}</li>
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </section>
        )}

        {product.specifications?.additional_options && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Additional options</h3>
            <dl className="characteristic-body__list">
              {product.specifications.additional_options?.options && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Features</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      {product.specifications.additional_options.options.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
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

export { ProductDetailsHeadphones };
