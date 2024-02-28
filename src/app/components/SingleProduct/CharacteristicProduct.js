import React from 'react'

const CharacteristicProduct = ({product}) => {

  return (
    <div className="characteristic-body">
      <div className="characteristic-body__info">
        <div className="characteristic-body__title">
          Specifications&nbsp;&nbsp;&mdash;&nbsp;&nbsp;<span>{product.model}</span>
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

              <div className="characteristic-body__item">
                <dt className="characteristic-body__label">Display resolution</dt>
                <dd className="characteristic-body__value">
                  <ul className="characteristic-body__sub-list">
                    <li>1600x720 (HD+)</li>
                  </ul>
                </dd>
              </div>
            </dl>
          </section>
        )}
      </div>
      <div className="characteristic-body__buy">Buy</div>
    </div>
  );
}

export { CharacteristicProduct }