import React from "react";
import { useSelector } from "react-redux";
import { CharacteristicBuy } from "../CharacteristicBuy";

const ProductDetailsTv = ({ product }) => {

  const activeColorIndex = useSelector((state) => state.product.activeColorIndex);

  return (
    <div className="characteristic-body">
      <div className="characteristic-body__info">
        <div className="characteristic-body__title">
          Specifications&nbsp;&nbsp;&mdash;&nbsp;&nbsp;<span>TV </span>
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

        {product.specifications?.display && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Display</h3>
            <dl className="characteristic-body__list">
              {product.specifications.display?.screen_diagonal && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Screen diagonal</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.display.screen_diagonal}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.display?.frequency && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Frequency</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.display.frequency}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.display?.display_matrix_type && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Display matrix type</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.display.display_matrix_type}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.display?.display_resolution && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Display resolution</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.display.display_resolution}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.display?.smart_TV_support && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Smart TV support</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.display.smart_TV_support}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.display?.viewing_angle && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Viewing angle</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.display.viewing_angle}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.display?.energy_consumption && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Energy consumption</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.display.energy_consumption}</li>
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </section>
        )}
        {product.specifications?.TV_tuner && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">TV tuner</h3>
            <dl className="characteristic-body__list">
              {product.specifications.TV_tuner?.tuner && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Screen diagonal</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.TV_tuner.tuner}</li>
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
              {product.specifications.memory?.operation && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Operation</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.memory.operation}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.memory?.RAM && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">RAM</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.memory.RAM}</li>
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
              {product.specifications.additional_options?.audio_system && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Audio system</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.additional_options.audio_system}</li>
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
              {product.specifications.other?.dimension && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Dimension</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.other.dimension}</li>
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

export { ProductDetailsTv };
