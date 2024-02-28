import { createSlice } from "@reduxjs/toolkit";

const filteredProductsSlice = createSlice({
  name: "filteredProducts",
  initialState: {
    baseFilter: [],
      },
  reducers: {
    setBaseFilteredProducts: (state, action) => {
      state.baseFilter = action.payload;
    },
      },
});

export const { setBaseFilteredProducts } = filteredProductsSlice.actions;
export default filteredProductsSlice.reducer;