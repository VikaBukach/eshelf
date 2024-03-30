import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("cart") || "[]"),
  },
  reducers: {
    addToCart: (state, action) => {
      if (state.data.findIndex((product) => product.id == action.payload.id) < 0) {
        const newState = [...state.data, { ...action.payload, quantity: 1 }];
        state.data = newState;

        localStorage.setItem("cart", JSON.stringify(newState));
      } else {
        const newState = state.data.map((product) => {
          if (product.id == action.payload.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        });
        localStorage.setItem("cart", JSON.stringify(newState));
        state.data = newState;
      }
    },
    removeFromCart: (state, action) => {
      const newState = [...state.data].filter((item) => item.id !== action.payload);
      state.data = newState;
      localStorage.setItem("cart", JSON.stringify(newState));
    },
    clearCart: (state, action) => {
      state.data = [];
      localStorage.removeItem("cart");
    },
    incrementProductQuantity: (state, action) => {
      const newState = state.data.map((p) => {
        if (p.id == action.payload) {
          return {
            ...p,
            quantity: p.quantity + 1,
          };
        }
        return p;
      });
      state.data = newState;
      localStorage.setItem("cart", JSON.stringify(newState));
    },
    decrementProductQuantity: (state, action) => {
      const product = state.data.find((p) => p.id === action.payload);

      if (product.quantity == 1) {
        const newState = state.data.filter((p) => p.id != action.payload);
        state.data = newState;
      } else {
        const newState = state.data.map((p) => {
          if (p.id == action.payload) {
            return {
              ...p,
              quantity: p.quantity - 1,
            };
          }
          return p;
        });
        state.data = newState;
        localStorage.setItem("cart", JSON.stringify(newState));
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, incrementProductQuantity, decrementProductQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
