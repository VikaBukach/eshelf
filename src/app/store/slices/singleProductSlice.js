import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PORT = process.env.REACT_APP_PORT || 5000;
const REACT_APP_BACK_URL = process.env.REACT_APP_BACK_URL || "http://localhost";

// Завантаження ОДНОГО товару згідно коллекції і id
export const loadOneProduct = createAsyncThunk("products/loadOneProduct", async ({ collection, id }, { dispatch }) => {
  try {
    const res = await axios.get(`${REACT_APP_BACK_URL}:${PORT}/load-one-product/?collection=${collection}`, {
      params: {
        id: id,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching one product (in slice):", error);
    throw error;
  }
});
const singleProductSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    tabs: "About the product",
    activeColorIndex: 0,
    activeImageIndex: 0,
    activeMemoryIndex: 0,
  },

  reducers: {
    changeTabs: (state, action) => {
      state.tabs = action.payload;
    },
    setActiveColorIndex: (state, action) => {
      state.activeColorIndex = action.payload;
      state.activeImageIndex = 0;
    },
    setActiveImageIndex: (state, action) => {
      state.activeImageIndex = action.payload;
    },
    setActiveMemoryIndex: (state, action) => {
      state.activeMemoryIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadOneProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadOneProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(loadOneProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { changeTabs, setActiveColorIndex, setActiveImageIndex, setActiveMemoryIndex } =
  singleProductSlice.actions;

export default singleProductSlice.reducer;
