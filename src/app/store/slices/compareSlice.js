import { createSlice } from "@reduxjs/toolkit";

const compareSlice = createSlice({
  name: "compare",
  initialState: {
    data: [],
    isOutOfLimit: false,
  },
  reducers: {
    addToCompare: (state, action) => {
      if (!state.isOutOfLimit) {
        state.data = [...state.data, action.payload];
      }
      if (state.data.length === 2) {
        state.isOutOfLimit = true;
      } else {
        state.isOutOfLimit = false;
      }
    },
    removeFromCompare: (state, action) => {
      state.data = [...state.data].filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCompare, removeFromCompare } = compareSlice.actions;

export default compareSlice.reducer;
