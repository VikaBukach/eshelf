import { createSlice } from "@reduxjs/toolkit";

const singleProductSlice = createSlice({
  name: "product",
  initialState: {
    tabs: "About the product",
  },

  reducers: {
    changeTabs: (state, action) => {
      state.tabs = action.payload
    }
  },

 
});

export const { changeTabs } = singleProductSlice.actions;

export default singleProductSlice.reducer;