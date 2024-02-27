import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataOfProducts = createAsyncThunk(
  "products/fetchDataOfProducts",
  async (collection, { dispatch }) => {
    try {
      const response = await axios.get(`http://localhost:5000/${collection}`);
      dispatch(setProducts(response.data));
      return response.data;
    } catch (err) {
      console.log("Error fetching products:", err);
      throw err;
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataOfProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDataOfProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchDataOfProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
