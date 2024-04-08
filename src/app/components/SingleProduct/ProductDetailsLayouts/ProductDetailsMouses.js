import React from "react";
import { useSelector } from "react-redux";
import { CharacteristicBuy } from "../CharacteristicBuy";

const ProductDetailsMouses = ({ product }) => {
  const activeColorIndex = useSelector((state) => state.product.activeColorIndex);
  const activeMemoryIndex = useSelector((state) => state.product.activeMemoryIndex);

  return (
    <div className="characteristic-body">
      <div className="characteristic-body__info">
        <div className="characteristic-body__title">
          Specifications&nbsp;&nbsp;&mdash;&nbsp;&nbsp;<span>Computer Mouse </span>
          <span>{product.brand} </span>
          <span>{product.model}</span>
        </div>

        {product?.colors && (
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
        {product.colors[activeColorIndex]?.products[activeMemoryIndex]?.connection && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Connection</h3>
            <dl className="characteristic-body__list">
              {
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Connection</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.colors[activeColorIndex].products[activeMemoryIndex].connection}</li>
                    </ul>
                  </dd>
                </div>
              }
            </dl>
          </section>
        )}
        {product.specifications?.characteristics && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Characteristics</h3>
            <dl className="characteristic-body__list">
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
              {product.specifications.characteristics?.power_source && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Power source</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics?.power_source}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.sensor_type && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Sensor type</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics?.sensor_type}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.dimension && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Dimension</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics?.dimension}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.guarantee && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Guarantee</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics?.guarantee}</li>
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </section>
        )}
        {product.specifications?.features && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Features</h3>
            <dl className="characteristic-body__list">
              {product.specifications.features?.for_hand && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">For_Hand</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.features.for_hand}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.features?.size && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Size</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.features.size}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.features?.quantity_of_buttons && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Quantity of buttons</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.features.quantity_of_buttons}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.features?.compatibility && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Compatibility</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.features.compatibility}</li>
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

export { ProductDetailsMouses };
