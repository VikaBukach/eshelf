import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderNumber: localStorage.getItem("orderNumber") ? JSON.parse(localStorage.getItem("orderNumber")) : null,
    userOrdersData: [],
};

const UserOrderSlice = createSlice({
  name: "order",
    initialState,
    reducers: {
        setOrderNumber(state, action) {
            // console.log("Payload received:", action.payload);
      localStorage.setItem("orderNumber", JSON.stringify(action.payload));
            state.orderNumber = action.payload;
        },
        clearOrderNumber(state) {
            localStorage.removeItem("orderNumber");
      state.orderNumber = null;
    },
    addUserOrder(state, action) {
      state.userOrdersData.push(action.payload);
    },
    clearUserOrders(state) {
      state.userOrdersData = [];
    },
  },
});

export const { setOrderNumber, clearOrderNumber, addUserOrder, clearUserOrders } = UserOrderSlice.actions;

export default UserOrderSlice.reducer;

