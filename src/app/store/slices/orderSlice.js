import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderNumber: localStorage.getItem("orderNumber") ? JSON.parse(localStorage.getItem("orderNumber")) : null,
  orderDate: localStorage.getItem("orderDate") ? JSON.parse(localStorage.getItem("orderDate")) : null,
};

const UserOrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderNumber(state, action) {
      localStorage.setItem("orderNumber", JSON.stringify(action.payload));
      state.orderNumber = action.payload;
    },
    setOrderDate: (state, action) => {
      localStorage.setItem("orderDate", JSON.stringify(action.payload));
    },
  },
});

export const { setOrderNumber, setOrderDate } = UserOrderSlice.actions;

export default UserOrderSlice.reducer;
