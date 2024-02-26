import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/NavMenuSlice";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import compareReducer from "./slices/compareSlice";
import singleProductSlice from "./slices/singleProductSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    products: productsReducer,
    cart: cartReducer,
    compare: compareReducer,
    product: singleProductSlice,
  },
});
