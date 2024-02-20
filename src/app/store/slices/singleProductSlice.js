import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk(
    "product/getProduct",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`http://localhost:5000/smartphones`);
            //console.log(response.data);
            return response.data;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err)
        }
    }
);

const singleProductSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: "idle",
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default singleProductSlice.reducer;