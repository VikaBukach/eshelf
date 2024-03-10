import { humanizeText } from "../Comparing/helpers";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { setFavoritesTotal } from "../../store/slices/navMenuSlice"; // додав обчислення загальної суми


const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.data);

  useEffect(() => {
    dispatch(setFavoritesTotal(favorites.length));
  }, [dispatch, favorites]);

  const groupCategories = (arr) => {
    let obj = {};

    arr.map((product) => {
      let item = { ...product };

      item.price = String(item.price);
      item.discountPrice = String(item.discountPrice);

      const category = String(item.category).toLowerCase();

      if (obj[category]) {
        obj[category] = [...obj[category], item];
      } else {
        obj[category] = [item];
      }
    });

    return obj;
  };

  const groups = groupCategories(favorites);

  return (
    <div className="favorites__wrapper">
      <h1>Favorites</h1>
      <div className="favorites__body">
        {Object.keys(groups).map((key) => (
          <div className="favorites__group" key={key}>
            <h2>{humanizeText(key)}</h2>
            <div className="favorites__group-list">
              {groups[key].map((product) => (
                <ProductCard key={product.id} {...{ ...product }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
