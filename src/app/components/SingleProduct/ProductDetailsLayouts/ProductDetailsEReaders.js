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

        {product.specifications && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Details</h3>
            <dl className="characteristic-body__list">
              {product.specifications.characteristics?.display_size && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Display size</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.display_size}</li>
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
              {product.specifications.memory?.memory && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Storage</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.memory.memory}</li>
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
            </dl>
          </section>
        )}

        {product.specifications.other?.guarantee && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Guarantee</h3>
            <dl className="characteristic-body__list">
              {
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Period</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.other.guarantee}</li>
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

export { ProductDetailsEReaders };
