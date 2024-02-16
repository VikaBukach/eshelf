import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/NavMenuSlice";
import productsReducer from "./slices/productsSlice";
import filteredProductsReducer from "./slices/filteredProductsSlice"
import filterSettingsReducer from "./slices/filterSettingsSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    products: productsReducer,
    filteredProducts: filteredProductsReducer,
    filterSettings: filterSettingsReducer,
  },
});
