import React from "react";
import { ButtonBuy } from "../ButtonBuy";
import { WeAccept } from "../WeAccept";
import { useSelector } from "react-redux";

const ProductDetailsSmartphones = ({ product }) => {
  const activeColorIndex = useSelector((state) => state.product.activeColorIndex);
  const activeMemoryIndex = useSelector((state) => state.product.activeMemoryIndex);

  return (
    <div className="characteristic-body">
      <div className="characteristic-body__info">
        <div className="characteristic-body__title">
          Specifications&nbsp;&nbsp;&mdash;&nbsp;&nbsp;<span>Smartphone </span>
          <span>{product.brand} </span>
          <span>{product.model}</span>
        </div>
        {product.specifications.display && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Display</h3>
            <dl className="characteristic-body__list">
              {product.specifications.display.screen_diagonal && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Screen diagonal</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.display.screen_diagonal}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.display.display_resolution && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Display resolution</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.display.display_resolution}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.display.display_matrix_type && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Display matrix type</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.display.display_matrix_type}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.display.frequency && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">The refresh rate of the display is</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.display.frequency}</li>
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </section>
        )}

        {product.specifications.operating_system && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Operating system</h3>
            <dl className="characteristic-body__list">
              {product.specifications.operating_system.type && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Operating system</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.operating_system.type}</li>
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </section>
        )}

        {product.specifications.processor && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Processor</h3>
            <dl className="characteristic-body__list">
              {product.specifications.processor.number_of_cores && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">The number of processor cores is</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.processor.number_of_cores}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.processor.type && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Processor frequency</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.processor.type}</li>
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </section>
        )}

        {product.specifications.memory && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Memory</h3>
            <dl className="characteristic-body__list">
              {product.specifications.memory.RAM && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">The amount of RAM is</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.memory.RAM}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.colors[activeColorIndex].products[activeMemoryIndex].capacity && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">The amount of built-in memory is</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.colors[activeColorIndex].products[activeMemoryIndex].capacity}</li>
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </section>
        )}

        {product.specifications.camera && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Camera</h3>
            <dl className="characteristic-body__list">
              {product.specifications.camera.number_of_cameras && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Number of cameras</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.camera.number_of_cameras}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.camera.main_camera && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">The maximum resolution of camera is</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.camera.main_camera}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.camera.front_camera && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Front camera</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.camera.front_camera}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.camera.functions && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Camera functions</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      {product.specifications.camera.functions.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </section>
        )}

        {product.specifications.battery && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Battery</h3>
            <dl className="characteristic-body__list">
              {product.specifications.battery.capacity && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Capacity</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.battery.capacity}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.battery.charging_port && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Charging port</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.battery.charging_port}</li>
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </section>
        )}

        {product.specifications.other && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Dimensions</h3>
            <dl className="characteristic-body__list">
              {product.specifications.other.dimension && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Dimensions (HxWxD)</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.other.dimension}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.other.weight && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Body weight</dt>
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
      </div>
      <div className="characteristic-body__buy">
        <div className="characteristic-body__carriage">
          <div className="characteristic-body__wrapper characteristic-aside">
            <div className="characteristic-aside__img">
              <img src={`/${product.colors[activeColorIndex].images[0]}`} alt={`${product.model}`} />
            </div>
            <div className="characteristic-aside__details">
              {product.model && <div className="characteristic-aside__title">{product.model}</div>}
              {product.colors[activeColorIndex].products[activeMemoryIndex].article && (
                <div className="characteristic-aside__article">
                  Code: <span>{product.colors[activeColorIndex].products[activeMemoryIndex].article}</span>
                </div>
              )}

              {product.colors[activeColorIndex].products[activeMemoryIndex].price && (
                <div className="characteristic-aside__price-old">
                  {product.colors[activeColorIndex].products[activeMemoryIndex].price}
                </div>
              )}

              {product.colors[activeColorIndex].products[activeMemoryIndex].discount_price && (
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

export { ProductDetailsSmartphones };
