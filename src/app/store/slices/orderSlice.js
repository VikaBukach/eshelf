import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orderNumber: null,
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrderNumber(state, action) {
            state.orderNumber = action.payload;
        },
        clearOrderNumber(state) {
            state.orderNumber = null;
        },
    },
});

export const { setOrderNumber, clearOrderNumber } = orderSlice.actions;

export default orderSlice.reducer;
