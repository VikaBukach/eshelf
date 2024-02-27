import { createSlice } from "@reduxjs/toolkit";

const compareSlice = createSlice({
  name: "compare",
  initialState: {
    data: JSON.parse(localStorage.getItem("compare"))?.data ?? [],
    selectedCategory: JSON.parse(localStorage.getItem("compare"))?.selectedCategory ?? null,
    canAddMore: (JSON.parse(localStorage.getItem("compare"))?.data ?? []).length != 2,
  },
  reducers: {
    addToCompare: (state, action) => {
      if (state.canAddMore) {
        if (state.selectedCategory == action.payload.category) {
          if (state.data.findIndex((i) => i._id == action.payload.product._id) < 0) {
            state.data = [...state.data, action.payload.product];
          } else {
            alert("Product already added to compare!");
          }
        }

        if (!state.selectedCategory) {
          state.selectedCategory = action.payload.category;
          state.data = [...state.data, action.payload.product];
        }
        localStorage.setItem("compare", JSON.stringify(state));
      } else {
        alert("Two products already added to compare!");
      }
    },
    removeFromCompare: (state, action) => {
      state.data = [...state.data].filter((item) => item._id !== action.payload);

      if (state.data.length < 2) {
        state.canAddMore = true;
      }

      if (state.data.length == 0) {
        state.selectedCategory = null;
      }

      localStorage.setItem("compare", JSON.stringify(state.data));
    },
  },
});

export const { addToCompare, removeFromCompare } = compareSlice.actions;

export default compareSlice.reducer;
