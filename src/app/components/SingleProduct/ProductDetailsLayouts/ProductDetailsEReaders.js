import React from "react";
import { CharacteristicBuy } from "../CharacteristicBuy";

const ProductDetailsEReaders = ({ product }) => {
  return (
    <div className="characteristic-body">
      <div className="characteristic-body__info">
        <div className="characteristic-body__title">
          Specifications&nbsp;&nbsp;&mdash;&nbsp;&nbsp;<span>Tablet </span>
          <span>{product.brand} </span>
          <span>{product.model}</span>
        </div>

        {product.specifications?.characteristics && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Characteristics</h3>
            <dl className="characteristic-body__list">
              {product.specifications.characteristics?.display_size && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Display size</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics?.display_size}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.display_matrix_type && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Display matrix type</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.display_matrix_type}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.display_type && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Display type</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.display_type}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.display_resolution && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Display resolution</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.display_resolution}</li>
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
            </dl>
          </section>
        )}

        {product.specifications?.additional_options && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Additional options</h3>
            <dl className="characteristic-body__list">
              {product.specifications.additional_options?.options && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Options</dt>
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

        {product.specifications?.battery && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Battery</h3>
            <dl className="characteristic-body__list">
              {product.specifications.battery?.battery_capacity && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Battery capacity</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.battery.battery_capacity}</li>
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </section>
        )}

        {product.specifications?.memory && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Memory</h3>
            <dl className="characteristic-body__list">
              {product.specifications.memory?.memory && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Memory</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.memory?.memory}</li>
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </section>
        )}

        {product.specifications?.other && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Other</h3>
            <dl className="characteristic-body__list">
              {product.specifications.other?.guarantee && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Guarantee</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.other.guarantee}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.other?.weight && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Weight</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.other.weight}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.other?.dimensions && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Dimensions</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.other.dimensions}</li>
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

export { ProductDetailsEReaders };
