import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderNumber: localStorage.getItem("orderNumber") ? JSON.parse(localStorage.getItem("orderNumber")) : null,
    orderDate: null,
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
        setOrderDate: (state, action) => {
            state.orderDate = action.payload
        },

  },
});

export const { setOrderNumber, setOrderDate } = UserOrderSlice.actions;

export default UserOrderSlice.reducer;

