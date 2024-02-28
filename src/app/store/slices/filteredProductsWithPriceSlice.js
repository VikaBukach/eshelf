import { createSlice } from "@reduxjs/toolkit";

const filteredProductsWithPriceSlice = createSlice({
  name: "filteredProductsWithPrice",
  initialState: {
    data: [],
      },
  reducers: {
    setFilteredProductsWithPrice: (state, action) => {
      state.data = action.payload;
    },
      },
});

export const { setFilteredProductsWithPrice } = filteredProductsWithPriceSlice.actions;
export default filteredProductsWithPriceSlice.reducer;