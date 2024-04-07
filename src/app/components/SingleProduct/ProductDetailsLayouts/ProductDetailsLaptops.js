import React from "react";
import { useSelector } from "react-redux";
import { CharacteristicBuy } from "../CharacteristicBuy";

const ProductDetailsLaptops = ({ product }) => {
  const activeColorIndex = useSelector((state) => state.product.activeColorIndex);

  return (
    <div className="characteristic-body">
      <div className="characteristic-body__info">
        <div className="characteristic-body__title">
          Specifications&nbsp;&nbsp;&mdash;&nbsp;&nbsp;<span>Laptop </span>
          <span>{product.brand} </span>
          <span>{product.model}</span>
        </div>

        {product.colors[activeColorIndex] && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Color</h3>
            <dl className="characteristic-body__list">
              {product.colors[activeColorIndex].color && (
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
            </dl>
          </section>
        )}
        {product.specifications?.processor && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Processor</h3>
            <dl className="characteristic-body__list">
              {
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Value</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.processor}</li>
                    </ul>
                  </dd>
                </div>
              }
            </dl>
          </section>
        )}
        {product.specifications?.memory && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Memory</h3>
            <dl className="characteristic-body__list">
              {product.specifications.memory?.RAM && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">The amount of RAM is</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.memory.RAM}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.memory?.type_of_RAM && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Type of RAM</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.memory.type_of_RAM}</li>
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </section>
        )}
        {product.specifications?.camera && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Camera</h3>
            <dl className="characteristic-body__list">
              {product.specifications.camera?.front_camera && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Front camera</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.camera.front_camera}</li>
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
              {product.specifications.battery?.battery_life && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Battery life</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.battery.battery_life}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.battery?.charging_port && (
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
        {product.specifications?.other && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Dimensions</h3>
            <dl className="characteristic-body__list">
              {product.specifications.other?.dimension && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Dimensions (HxWxD)</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.other.dimension}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.other?.weight && (
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

      <CharacteristicBuy product={product} />
    </div>
  );
};

export { ProductDetailsLaptops };
