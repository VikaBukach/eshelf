import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    data: JSON.parse(localStorage.getItem("favorites")) ?? [],
  },
  reducers: {
    toggleFavorites: (state, action) => {
      if (state.data.findIndex((i) => i.id === action.payload.id) < 0) {
        state.data = [...state.data, action.payload];
      } else {
        state.data = state.data.filter((i) => i.id !== action.payload.id);
      }

      localStorage.setItem("favorites", JSON.stringify(state.data));
    },
  },
});

export const { toggleFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
