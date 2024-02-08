import { configureStore } from "@reduxjs/toolkit";
import { testSlice } from "./slices";

export const store = configureStore({
  reducer: {
    test: testSlice,
  },
});
