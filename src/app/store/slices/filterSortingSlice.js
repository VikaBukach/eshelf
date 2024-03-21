import { createSlice } from "@reduxjs/toolkit";

const filterSortingSlice = createSlice({
  name: "filterSorting",
  initialState: {
    mode: "Best Seller"
  },
  reducers: {
    setFilterSorting: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setFilterSorting } = filterSortingSlice.actions;
export default filterSortingSlice.reducer;
