import { createSlice } from "@reduxjs/toolkit";

const singleProductSlice = createSlice({
  name: "product",
  initialState: {
    tabs: "About the product",
    activeColorIndex: 0,
    activeImageIndex: 0,
    activeMemoryIndex: 0,
  },

  reducers: {
    changeTabs: (state, action) => {
      state.tabs = action.payload;
    },
    setActiveColorIndex: (state, action) => {
      state.activeColorIndex = action.payload;
      state.activeImageIndex = 0;
    },
    setActiveImageIndex: (state, action) => {
      state.activeImageIndex = action.payload;
    },
    setActiveMemoryIndex: (state, action) => {
      state.activeMemoryIndex = action.payload;
    },
  },
});

export const { changeTabs, setActiveColorIndex, setActiveImageIndex, setActiveMemoryIndex } =
  singleProductSlice.actions;

export default singleProductSlice.reducer;
