import React, { useEffect, useState } from "react";
import "./UserView.scss";
import FavoritesPage from "../../Favorites";
import ProductCard from "../../ProductCard/ProductCard";
import { useSelector } from "react-redux";
import axios from "axios";

const groupByDate = (arr, dateKey) => {
  const grouped = {};
  arr.forEach((obj) => {
    const date = new Date(obj[dateKey]).toISOString().split("T")[0]; // Extracting date part from ISO string
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(obj);
  });
  return grouped;
};

const REACT_APP_BACK_URL = process.env.REACT_APP_BACK_URL || "http://localhost";

const UserView = () => {
  const user = useSelector((state) => state.user.data);
  const PORT = process.env.REACT_APP_PORT || 5000;
  // const revisedProducts = localStorage.getItem("revised") ?? "";
  const [productsViews, setProductsViews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${REACT_APP_BACK_URL}:${PORT}/getRevised`, {
          params: { userEmail: user.email },
        });

        const newProducts = response.data.flatMap((product) => {
          if (product.colors) {
            return product.colors.map((color) => {
              const productItem = {};
              productItem.index = product._id;
              productItem.revisedAt = product?.revisedAt;
              productItem.image = color.images[0];
              productItem.category = product.category;
              productItem.fullName = product.brand + " " + product.model + " " + color.color;
              productItem.priceBy = color.products[0].price;
              productItem.discountPriceBy = color.products[0].discount_price;
              productItem.colorIndex = color.color;
              return productItem;
            });
          } else {
            return [];
          }
        });

        const uniqueProducts = newProducts.filter(
          (product, index, self) => index === self.findIndex((p) => p.index === product.index)
        );

        setProductsViews(groupByDate(uniqueProducts, "revisedAt"));
        setIsLoading(false); // Оновлення стану завантаження після успішного завантаження даних
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Оновлення стану завантаження в разі помилки
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-viewed">
      <div>
        {isLoading ? ( // Перевірка стану завантаження для рендерингу "Завантажується"
          <div className="loader" />
        ) : (
          Object.entries(productsViews).map(([date, arr], idx) => (
            <div className="user-viewed__box">
              <h2 className="user-viewed__title">{date}</h2>
              <div className="user-viewed__list">
                {arr.map((productItem, index) => (
                  <ProductCard
                    key={productItem.index}
                    id={productItem.index}
                    imageURL={productItem.image}
                    category={productItem.category}
                    title={productItem.fullName}
                    price={productItem.priceBy}
                    discountPrice={productItem.discountPriceBy}
                    color={productItem.colorIndex}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserView;

// console.log(revised);
// console.log("products", products);

// const filteredProductsWithPrice = products.filter((productItem) => {
//   console.log(productItem);
//   console.log(revised.includes(productItem._id));
// });

// const productsViews = filteredProductsWithPrice.map((product) => {
//   if (product.colors) {
//     return product.colors.map((color) => {
//       const cloneProduct = JSON.parse(JSON.stringify(product));
//       delete cloneProduct.colors;
//       const productItem = { ...cloneProduct, color };
//       productItem.fullName = product.brand + " " + product.model + " " + color.color;
//       productItem.index = product._id;
//       productItem.colorIndex = color.color;
//       productItem.image = color.images[0];
//       productItem.category = product.category;
//       productItem.priceBy = color.products[0].price;
//       let l = color.products.length - 1;
//       productItem.priceTo = color.products[l].price;
//       productItem.discountPriceBy = color.products[0].discount_price;
//     });
//   }
// });
