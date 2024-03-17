import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    orderNumber: null,
    userOrdersData: [],
};

const UserOrderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {

        setOrderNumber(state, action) {
            state.orderNumber = action.payload;
        },
        clearOrderNumber(state) {
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

export const { setOrderNumber, clearOrderNumber, addUserOrder, clearUserOrders  } = UserOrderSlice.actions;

export default UserOrderSlice.reducer;
