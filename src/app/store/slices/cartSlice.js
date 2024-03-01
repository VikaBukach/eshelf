import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    addToCart: (state, action) => {
      if (state.data.findIndex((product) => product.id == action.payload.id) < 0) {
        state.data = [...state.data, { ...action.payload, quantity: 1 }];
      } else {
        state.data = state.data.map((product) => {
          if (product.id == action.payload.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        });
      }
    },
    removeFromCart: (state, action) => {
      state.data = [...state.data].filter((item) => item.id !== action.payload);
    },
    clearCart: (state, action) => {
      state.data = [];
    },
    incrementProductQuantity: (state, action) => {
      state.data = state.data.map((p) => {
        if (p.id == action.payload) {
          return {
            ...p,
            quantity: p.quantity + 1,
          };
        }
        return p;
      });
    },
    decrementProductQuantity: (state, action) => {
      const product = state.data.find((p) => p.id === action.payload);

      if (product.quantity == 1) {
        state.data = state.data.filter((p) => p.id != action.payload);
      } else {
        state.data = state.data.map((p) => {
          if (p.id == action.payload) {
            return {
              ...p,
              quantity: p.quantity - 1,
            };
          }
          return p;
        });
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, incrementProductQuantity, decrementProductQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
