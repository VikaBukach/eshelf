import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { changeTabs } from "../../store/slices/singleProductSlice";
import { fetchDataOfProducts } from "../../store/slices/productsSlice";
import { AboutProduct } from "../../components/SingleProduct/AboutProduct";
import { CharacteristicProduct } from "../../components/SingleProduct/CharacteristicProduct";
import { PhotoVideoProduct } from "../../components/SingleProduct/PhotoVideoProduct";
import { ReviewsProduct } from "../../components/SingleProduct/ReviewsProduct";

const ProductPage = () => {
  const { collection, id } = useParams();

  //console.log(collection);

  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.data.find((item) => item._id === id));

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
        <div className="container">
          <h1 className="product-details__title">{product.model}</h1>

          <ul className="product-details__tabs">
            {["About the product", "Characteristic", "Reviews", "Photo and video"].map((item, id) => (
              <li
                className={`product-details__tabs-item ${tabs === item ? "product-details__tabs-active" : ""}`}
                key={id}
                onClick={() => dispatch(changeTabs(item))}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="product-details__body">
            {tabs === "About the product" && <AboutProduct product={product} />}
            {tabs === "Characteristic" && <CharacteristicProduct />}
            {tabs === "Reviews" && <ReviewsProduct />}
            {tabs === "Photo and video" && <PhotoVideoProduct />}
          </div>
        </div>
      </section>
    </>
  );
};

export { ProductPage };
