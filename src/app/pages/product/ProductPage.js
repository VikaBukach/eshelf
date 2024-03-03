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

  useEffect(() => {
    // Восстановление выбранного таба из URL при загрузке страницы
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");
    if (tab) {
      dispatch(changeTabs(tab));
    }
  }, [dispatch]);

  useEffect(() => {
    // Восстановление выбранного таба из localStorage при загрузке страницы
    const storedTab = localStorage.getItem("selectedTab");
    if (storedTab) {
      dispatch(changeTabs(storedTab));
    }
  }, [dispatch]);

  const handleTabClick = (tabName) => {
    // Обновление хранилища и состояния таба при клике на табе
    localStorage.setItem("selectedTab", tabName);

    // Обновление URL при клике на табе
    const url = new URL(window.location.href);
    if (tabName === "About the product") {
      url.searchParams.delete("tab");
    } else {
      url.searchParams.set("tab", tabName.toLowerCase().replace(/ /g, "-"));
    }
    window.history.pushState({ path: url.href }, "", url.href);

    dispatch(changeTabs(tabName));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="product-details">
        <div className="container">
          <h1 className="product-details__title">{product.model}</h1>

          <ul className="product-details__tabs">
            {["About the product", "Characteristic", "Reviews", "Photo and video"].map((item, id) => (
              <li
                className={`product-details__tabs-item ${tabs === item ? "product-details__tabs-active" : ""}`}
                key={id}
                onClick={() => handleTabClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="product-details__body">
            {tabs === "About the product" && <AboutProduct product={product} />}
            {tabs === "Characteristic" && <CharacteristicProduct product={product} />}
            {tabs === "Reviews" && <ReviewsProduct />}
            {tabs === "Photo and video" && <PhotoVideoProduct />}
          </div>
        </div>
      </section>
    </>
  );
};

export { ProductPage };
