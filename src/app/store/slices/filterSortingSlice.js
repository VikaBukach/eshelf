import { createSlice } from "@reduxjs/toolkit";

const filterSortingSlice = createSlice({
  name: "filterSorting",
  initialState: {
    mode: "Best Seller",
    productsToResrtSorting: [],
  },
  reducers: {
    setFilterSorting: (state, action) => {
      state.mode = action.payload;
    },
    setProductsToResrtSorting: (state, action) => {
      state.productsToResrtSorting = action.payload;
    },
  },
});

export const { setFilterSorting, setProductsToResrtSorting } = filterSortingSlice.actions;
export default filterSortingSlice.reducer;
