import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PORT = process.env.REACT_APP_PORT || 5000;

export const selectProducts = (state) => state.products.data;

// Завантаження ОДНОГО товару згідно коллекції і id
export const loadOneProduct = createAsyncThunk("products/loadOneProduct", async ({ collection, id }, { dispatch }) => {
  try {
    const res = await axios.get(`http://localhost:${PORT}/load-one-product/?collection=${collection}`, {
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

// Завантаження СТОРІНКИ товарів
export const loadOnePageOfProducts = createAsyncThunk(
  "products/loadOnePageOfProducts",
  async ({ collection, filterSettings, priceBy, priceTo, limit, page, sortingMode }, { dispatch, getState }) => {
    try {
      const res = await axios.get(`http://localhost:${PORT}/load-one-page-of-products/?collection=${collection}`, {
        params: {
          filterSettings: filterSettings,
          priceBy: priceBy,
          priceTo: priceTo,
          limit: limit,
          page: page,
          sortingMode: sortingMode,
        },
      });
      const { paginatedProducts, numberOfPages } = res.data;
      dispatch(setNumberOfPages(numberOfPages));

      if (page === 1) {
        return paginatedProducts;
      } else {
        const products = selectProducts(getState());
        return [...products, ...paginatedProducts];
      }
    } catch (error) {
      console.error("Error fetching min and max prices:", error);
      throw error;
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    numberOfPages: 0,
    pagesToLoading: 1,
    cardsOnPage: 12,
    status: "idle",
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setPagesToLoading: (state, action) => {
      state.pagesToLoading = action.payload;
    },
    setNumberOfPages: (state, action) => {
      state.numberOfPages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadOnePageOfProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadOnePageOfProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(loadOnePageOfProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setProducts, setPagesToLoading, setNumberOfPages } = productsSlice.actions;

export default productsSlice.reducer;
