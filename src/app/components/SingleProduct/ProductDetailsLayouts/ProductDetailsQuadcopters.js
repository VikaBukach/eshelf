import React from "react";
import { ButtonBuy } from "../ButtonBuy";
import { WeAccept } from "../WeAccept";
import { useSelector } from "react-redux";

const ProductDetailsQuadcopters = ({ product }) => {
  const activeColorIndex = useSelector((state) => state.product.activeColorIndex);
  const activeMemoryIndex = useSelector((state) => state.product.activeMemoryIndex);

  return (
    <div className="characteristic-body">
      <div className="characteristic-body__info">
        <div className="characteristic-body__title">
          Specifications&nbsp;&nbsp;&mdash;&nbsp;&nbsp;<span>Quadcopter </span>
          <span>{product.brand} </span>
          <span>{product.model}</span>
        </div>
        {product.specifications?.characteristics && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Characteristics</h3>
            <dl className="characteristic-body__list">
              {product.specifications.characteristics?.size && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Size</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.size}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.type_of_management && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Type of management</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.type_of_management}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.type && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Type</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.type}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.max_speed && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Max speed</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.max_speed}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.question && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Question</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.question}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.charging_time && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Charging time</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.charging_time}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.battery_capacity && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Battery capacity</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.battery_capacity}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.flight_time && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Flight time</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.flight_time}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.flight_height && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Flight height</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.flight_height}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.range_of_action && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Range of action</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.range_of_action}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.characteristics?.video_broadcast && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Video broadcast</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.characteristics.video_broadcast}</li>
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
                      {product.specifications.additional_options?.options.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </section>
        )}
        {product.specifications?.delivery_set && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Delivery set</h3>
            <dl className="characteristic-body__list">
              {
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Options</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      {product.specifications.delivery_set.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              }
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
      <div className="characteristic-body__buy">
        <div className="characteristic-body__carriage">
          <div className="characteristic-body__wrapper characteristic-aside">
            <div className="characteristic-aside__img">
              <img src={`/${product.colors[activeColorIndex].images[0]}`} alt={`${product.model}`} />
            </div>
            <div className="characteristic-aside__details">
              {product.model && <div className="characteristic-aside__title">{product.model}</div>}
              {product.colors[activeColorIndex].products[activeMemoryIndex]?.article && (
                <div className="characteristic-aside__article">
                  Code: <span>{product.colors[activeColorIndex].products[activeMemoryIndex].article}</span>
                </div>
              )}

              {product.colors[activeColorIndex].products[activeMemoryIndex]?.price && (
                <div className="characteristic-aside__price-old">
                  {product.colors[activeColorIndex].products[activeMemoryIndex].price}
                </div>
              )}

              {product.colors[activeColorIndex].products[activeMemoryIndex]?.discount_price && (
                <div className="characteristic-aside__price">
                  {product.colors[activeColorIndex].products[activeMemoryIndex].discount_price}
                </div>
              )}

              <div className="characteristic-aside__button">
                <ButtonBuy />
              </div>
              <WeAccept />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductDetailsQuadcopters };
