import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isOpen: false,
    compareCount: 1,
    favoritesCount: 1,
    cartCount: 1,
    userCount: 1,
    cartTotal: 0,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    setCompareCount: (state, action) => {
      state.compareCount = action.payload;
    },
    setFavoritesCount: (state, action) => {
      state.favoritesCount = action.payload;
    },
    setCartCount: (state, action) => {
      state.cartCount = action.payload;
    },
    setUserCount: (state, action) => {
      state.userCount = action.payload;
    },
    setCartTotal: (state, action) => { 
      state.cartTotal = action.payload;
    },
  },
});

export const { toggleMenu, setCompareCount, setFavoritesCount, setCartCount, setUserCount, setCartTotal } = menuSlice.actions;

export const selectCartTotal = (state) => state.menu.cartTotal;

export default menuSlice.reducer;
