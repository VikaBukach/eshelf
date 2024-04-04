import React from "react";
import { CharacteristicBuy } from "../CharacteristicBuy";

const ProductDetailsTablets = ({ product }) => {
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
              {product.specifications?.display_size && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Display size</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.display_size}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications?.display_resolution && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Display resolution</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.display_resolution}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications?.processor && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Processor</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.processor}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications?.storage && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Storage</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.storage}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications?.RAM && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">RAM</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.RAM}</li>
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

export { ProductDetailsTablets };
