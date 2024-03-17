import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formData: {
        name: "",
        surname: "",
        phone: "",
        email: "",
        city: "",
        deliveryMethod: "",
        paymentMethod: "",
    },
};

const orderFormSlice = createSlice({
    name: "orderForm",
    initialState,
    reducers: {
            saveFormData(state, action) {
                state.formData = action.payload;
            },
    },
});

export const { saveFormData } = orderFormSlice.actions;
export default orderFormSlice.reducer;