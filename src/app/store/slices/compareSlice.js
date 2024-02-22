import { createSlice } from "@reduxjs/toolkit";

const compareSlice = createSlice({
  name: "compare",
  initialState: {
    data: JSON.parse(localStorage.getItem("compare")) ?? [],
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
      localStorage.setItem("compare", JSON.stringify(state.data));
    },
    removeFromCompare: (state, action) => {
      state.data = [...state.data].filter((item) => item.id !== action.payload);
      localStorage.setItem("compare", JSON.stringify(state.data));
    },
  },
});

export const { addToCompare, removeFromCompare } = compareSlice.actions;

export default compareSlice.reducer;
