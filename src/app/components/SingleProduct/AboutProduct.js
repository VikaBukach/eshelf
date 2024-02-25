import React from 'react'

const AboutProduct = ({ product }) => {

  return (
    <div className="product-details-body">
      <div className="product-details-body__slider">
        <div className="product-details-body__img-big">
          <img src={`/${product.colors[0].images[0]}`} alt={`${product.model}`} />
        </div>
        <div className="product-details-body__img-wrap">
          {product.colors[0].images.map((image, i) => (
            <div key={i} className="product-details-body__img-small" onClick={() => {}}>
              <img src={`/${image}`} alt={`${product.model}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="product-details-body__info info-details">
        <div className="info-details__memory">
          <div className="info-details__header">Select memory</div>
          <div className="info-details__block">
            <div className="info-details__block-item">32</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AboutProduct }
