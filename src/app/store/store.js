import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/NavMenuSlice";
import productsReducer from "./slices/productsSlice";
import filteredProductsReducer from "./slices/filteredProductsSlice";
import filterSettingsReducer from "./slices/filterSettingsSlice";
import filteredProductsWithPriceReducer from "./slices/filteredProductsWithPriceSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    products: productsReducer,
    filteredProducts: filteredProductsReducer,
    filteredProductsWithPrice: filteredProductsWithPriceReducer,
    filterSettings: filterSettingsReducer,
  },
});
