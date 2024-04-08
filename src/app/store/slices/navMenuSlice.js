import { createSlice } from "@reduxjs/toolkit";

// Обчислюємо загальну вартість корзини
const getTotalCart = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart).reduce((prev, curr) => {
      return prev + curr.quantity * (curr?.discountPrice || curr.price);
    }, 0);
  } else {
    return 0;
  }
};

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isOpen: false,
    compareCount: 0,
    favoritesCount: 0,
    cartCount: 1,
    userCount: 1,
    cartTotal: getTotalCart(), // Встановлюємо початкове значення для загальної вартості товарів в корзині
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
      state.compareTotal = action.payload;
    },
  },
});

export const {
  toggleMenu,
  setCompareCount,
  setFavoritesCount,
  setCartCount,
  setUserCount,
  setCartTotal,
  setFavoritesTotal,
  setCompareTotal,
} = menuSlice.actions;

export const selectCartTotal = (state) => state.menu.cartTotal;
export const selectFavoritesTotal = (state) => state.menu.favoritesTotal;
export const selectCompareTotal = (state) => state.menu.compareTotal;

export default menuSlice.reducer;
