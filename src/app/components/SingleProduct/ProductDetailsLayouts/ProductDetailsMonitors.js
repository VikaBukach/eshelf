import React from "react";
import { ButtonBuy } from "../ButtonBuy";
import { WeAccept } from "../WeAccept";
import { useSelector } from "react-redux";

const ProductDetailsMonitors = ({ product }) => {
  const activeColorIndex = useSelector((state) => state.product.activeColorIndex);
  const activeMemoryIndex = useSelector((state) => state.product.activeMemoryIndex);

  return (
    <div className="characteristic-body">
      <div className="characteristic-body__info">
        <div className="characteristic-body__title">
          Specifications&nbsp;&nbsp;&mdash;&nbsp;&nbsp;<span>Monitor </span>
          <span>{product.brand} </span>
          <span>{product.model}</span>
        </div>

        {product.specifications?.display && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Display</h3>
            <dl className="characteristic-body__list">
              {product.specifications.display?.display_diagonal && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Display diagonal</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.display.display_diagonal}</li>
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
              {product.specifications.display?.display_brightness && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Display brightness</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.display.display_brightness}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.display?.matrix_type && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Matrix type</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.display.matrix_type}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.display?.display_contrast && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Display contrast</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.display.display_contrast}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.display?.features && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Features</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.display.features}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.display?.maximum_number_of_colors && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Maximum number of colors</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.display.maximum_number_of_colors}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.display?.power_consumption && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Power consumption</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.display.power_consumption}</li>
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

export { ProductDetailsMonitors };
