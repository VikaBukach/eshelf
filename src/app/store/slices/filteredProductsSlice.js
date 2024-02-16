import { createSlice } from "@reduxjs/toolkit";

const filteredProductsSlice = createSlice({
  name: "filteredProducts",
  initialState: {
    data: [],
  },
  reducers: {
    setFilteredProducts: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setFilteredProducts } = filteredProductsSlice.actions;
export default filteredProductsSlice.reducer;