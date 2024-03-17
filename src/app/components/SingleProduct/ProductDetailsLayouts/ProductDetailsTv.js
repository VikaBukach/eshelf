import React from "react";
import { CharacteristicBuy } from "../CharacteristicBuy";

const ProductDetailsTv = ({ product }) => {
  return (
    <div className="characteristic-body">
      <div className="characteristic-body__info">
        <div className="characteristic-body__title">
          Specifications&nbsp;&nbsp;&mdash;&nbsp;&nbsp;<span>TV </span>
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
              {product.specifications?.display_technology && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Display technology</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications?.display_technology}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications?.smart_tv && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Smart tv</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications?.smart_tv === true ? "true" : "false"}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications?.hdr_support && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Hdr support</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications?.hdr_support === true ? "true" : "false"}</li>
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
              {product.specifications?.built_in_speakers && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Built in speakers</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.built_in_speakers}</li>
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

export { ProductDetailsTv };
