import { createSlice } from "@reduxjs/toolkit";

const filteredProductsSlice = createSlice({
  name: "filteredProducts",
  initialState: {
    baseFilter: [],
    filteredWithPrice: [],
  },
  reducers: {
    setBaseFilteredProducts: (state, action) => {
      state.baseFilter = action.payload;
    },
    setProductsFilteredWithPrice: (state, action) => {
      state.filteredWithPrice = action.payload;
    },
  },
});

export const { setBaseFilteredProducts, setProductsFilteredWithPrice } = filteredProductsSlice.actions;
export default filteredProductsSlice.reducer;