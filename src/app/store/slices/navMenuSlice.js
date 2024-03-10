import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isOpen: false,
    compareCount: 0,
    favoritesCount: 0,
    cartCount: 1,
    userCount: 1,
    cartTotal: 0,
    favoritesTotal: 0,
    compareTotal: 0,
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
    setFavoritesTotal: (state, action) => { 
      state.favoritesTotal = action.payload;
    },
    setCompareTotal: (state, action) => { 
      state.favoritesTotal = action.payload;
    },
  },
});

export const { toggleMenu, setCompareCount, setFavoritesCount, setCartCount, setUserCount, setCartTotal, setFavoritesTotal, setCompareTotal } = menuSlice.actions;

export const selectCartTotal = (state) => state.menu.cartTotal;
export const selectFavoritesTotal = (state) => state.menu.favoritesTotal;
export const selectCompareTotal = (state) => state.menu.compareTotal;


export default menuSlice.reducer;
