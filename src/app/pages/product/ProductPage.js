import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { changeTabs } from '../../store/slices/singleProductSlice'; 
import { fetchDataOfProducts } from '../../store/slices/productsSlice'; 

const ProductPage = () => {

  const { collection, id } = useParams();

  //console.log(collection);

  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.data.find(item => item._id === id));

  const { tabs } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchDataOfProducts(`${collection}`));
  }, [dispatch, collection]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>Breadcrumbs</div>
      <section className="product-details">
        <h1 className="product-details__title">{product.model}</h1>

        <h2>{tabs}</h2>
        <ul>
          {["About the product", "Characteristic", "Reviews", "Photo and video"].map((item, id) => (
            <li
              className={`${tabs === item ? "product-details__tabs-active" : ""}`}
              key={id}
              onClick={() => dispatch(changeTabs(item))}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="product-details__body">
          {tabs === "About the product" && <p>{product.image}</p>}
          {tabs === "Characteristic" && <p>{product.brand}</p>}
          {tabs === "Reviews" && <p>{product._id}</p>}
          {tabs === "Photo and video" && <p>{product.model}</p>}
        </div>
      </section>
    </>
  );
}

export { ProductPage }
