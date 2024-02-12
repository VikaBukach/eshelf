import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/NavMenuSlice";
import productsReducer from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    products: productsReducer,
  },
});
