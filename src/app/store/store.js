import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/NavMenuSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});
