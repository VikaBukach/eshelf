import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/navMenuSlice";
import productsReducer from "./slices/productsSlice";
import filterSettingsReducer from "./slices/filterSettingsSlice";
import filterSortingSliceReducer from "./slices/filterSortingSlice";
import pageReducer from "./reducers/pageReducer";
import cartReducer from "./slices/cartSlice";
import compareReducer from "./slices/compareSlice";
import singleProductSlice from "./slices/singleProductSlice";
import favoritesReducer from "./slices/favoritesSlice";
import userReducer from "./slices/authSlice";
import orderReducer from "./slices/orderSlice";
import orderFormReducer from "./slices/orderFormSlice";
import burgerMenuReducer from "./reducers/burgerMenuReducer";
import categoryReducer from "./reducers/categoryReducer";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    products: productsReducer,
    filterSettings: filterSettingsReducer,
    filterSorting: filterSortingSliceReducer,
    page: pageReducer,
    cart: cartReducer,
    compare: compareReducer,
    product: singleProductSlice,
    favorites: favoritesReducer,
    user: userReducer,
    order: orderReducer,
    orderForm: orderFormReducer,
    burgerMenu: burgerMenuReducer,
    category: categoryReducer,
  },
});
