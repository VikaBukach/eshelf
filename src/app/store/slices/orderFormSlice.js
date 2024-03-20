import { createSlice } from "@reduxjs/toolkit";

const saveDataToLocalStorage = (data) => {
  localStorage.setItem("formData", JSON.stringify(data));
};

const loadDataFromLocalStorage = () => {
  const data = localStorage.getItem("formData");
  return data ? JSON.parse(data) : {};
};

const initialState = {
  formData: loadDataFromLocalStorage(),
};

const orderFormSlice = createSlice({
  name: "orderForm",
  initialState,
  reducers: {
    saveFormData(state, action) {
      state.formData = action.payload;
      saveDataToLocalStorage(action.payload);
    },
  },
});

export const { saveFormData } = orderFormSlice.actions;
export default orderFormSlice.reducer;
