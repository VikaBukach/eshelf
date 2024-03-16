import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveImageIndex } from '../../store/slices/singleProductSlice';

const GalleryProduct = ({ product }) => {

const activeColorIndex = useSelector((state) => state.product.activeColorIndex);
const activeImageIndex = useSelector((state) => state.product.activeImageIndex);
const dispatch = useDispatch();

const handleSmallImageClick = (index) => {
  dispatch(setActiveImageIndex(index));
};

  return (
    <div className="product-details-body__slider">
      <div className="product-details-body__img-big">
        <img src={`/${product.colors[activeColorIndex].images[activeImageIndex]}`} alt={`${product.model}`} />
      </div>
      <div className="product-details-body__img-wrap">
        {product.colors[activeColorIndex].images.map((image, i) => (
          <div key={i} className="product-details-body__img-small" onClick={() => handleSmallImageClick(i)}>
            <img src={`/${image}`} alt={`${product.model}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export { GalleryProduct }
