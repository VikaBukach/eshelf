import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/navMenuSlice";
import productsReducer from "./slices/productsSlice";
import filteredProductsReducer from "./slices/filteredProductsSlice";
import filterSettingsReducer from "./slices/filterSettingsSlice";
import filteredProductsWithPriceReducer from "./slices/filteredProductsWithPriceSlice";
import filterSortingSliceReducer from "./slices/filterSortingSlice";
import pageReducer from "./reducers/pageReducer";
import cartReducer from "./slices/cartSlice";
import compareReducer from "./slices/compareSlice";
import singleProductSlice from "./slices/singleProductSlice";
import favoritesReducer from "./slices/favoritesSlice";
import userReducer from "./slices/authSlice";
import orderReducer from "./slices/orderSlice";
import orderFormReducer from "./slices/orderFormSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    products: productsReducer,
    filteredProducts: filteredProductsReducer,
    filteredProductsWithPrice: filteredProductsWithPriceReducer,
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
  },
});
