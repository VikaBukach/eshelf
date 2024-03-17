import React from "react";
import { useSelector } from "react-redux";
import { CharacteristicBuy } from "../CharacteristicBuy";

const ProductDetailsSmartwatches = ({ product }) => {
  const activeColorIndex = useSelector((state) => state.product.activeColorIndex);
  const activeMemoryIndex = useSelector((state) => state.product.activeMemoryIndex);

  return (
    <div className="characteristic-body">
      <div className="characteristic-body__info">
        <div className="characteristic-body__title">
          Specifications&nbsp;&nbsp;&mdash;&nbsp;&nbsp;<span>Smartwatch </span>
          <span>{product.brand} </span>
          <span>{product.model}</span>
        </div>

        {product.colors[activeColorIndex].products[activeMemoryIndex] && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Main details</h3>
            <dl className="characteristic-body__list">
              {product.colors[activeColorIndex].products[activeMemoryIndex]?.case_size && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Case size</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.colors[activeColorIndex].products[activeMemoryIndex].case_size}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.colors[activeColorIndex].products[activeMemoryIndex]?.battery && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Duration of work</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.colors[activeColorIndex].products[activeMemoryIndex].battery}</li>
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </section>
        )}

        {product.colors[activeColorIndex] && (
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
              {product.specifications.display.resolution && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Resolution</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.display.resolution}</li>
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
            </dl>
          </section>
        )}

        {product.specifications?.processor && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Processor</h3>
            <dl className="characteristic-body__list">
              {product.specifications.processor?.matrix_type && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Matrix type</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.processor.matrix_type}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.specifications.processor?.type && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Type</dt>
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

        {product.specifications?.memory && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Memory</h3>
            <dl className="characteristic-body__list">
              {product.specifications.memory?.memory && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Memory</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.memory.memory}</li>
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </section>
        )}

        {product.specifications?.battery_capacity && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Battery</h3>
            <dl className="characteristic-body__list">
              {product.specifications.battery_capacity?.capacity && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Capacity</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.battery_capacity?.capacity}</li>
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </section>
        )}

        {product.specifications?.wireless_capabilities && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Wireless Capabilities</h3>
            <dl className="characteristic-body__list">
              {product.specifications.wireless_capabilities?.payment && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Payment</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.specifications.wireless_capabilities?.payment}</li>
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </section>
        )}

        {product.specifications?.connectivity && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Connectivity</h3>
            <dl className="characteristic-body__list">
              {product.specifications.connectivity?.gps && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">GPS</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      {product.specifications.connectivity.gps.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </section>
        )}

        {product?.functions && (
          <section className="characteristic-body__group">
            <h3 className="characteristic-body__heading">Functions</h3>
            <dl className="characteristic-body__list">
              {product.functions?.features && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Features</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      {product.functions.features.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
              {product.functions?.other?.weight && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Weight</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.functions.other.weight}</li>
                    </ul>
                  </dd>
                </div>
              )}
              {product.functions?.operating_system?.type && (
                <div className="characteristic-body__item">
                  <dt className="characteristic-body__label">Operating system</dt>
                  <dd className="characteristic-body__value">
                    <ul className="characteristic-body__sub-list">
                      <li>{product.functions.operating_system.type}</li>
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

export { ProductDetailsSmartwatches };
