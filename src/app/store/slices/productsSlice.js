import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { filterByPrice } from "../../helpers/catalog";
import { filterProducts } from "../../helpers/catalog";

export const selectProducts = (state) => state.products.data;
export const selectPageOfDB = (state) => state.products.pageOfDB;
export const selectProductsDataLength = (state) => state.products.productsDataLength;
export const selectCardsOnPage = (state) => state.products.cardsOnPage;
export const selectPagesToLoading = (state) => state.products.pagesToLoading;
export const selectFilterSettings = (state) => state.filterSettings.checkboxes;
export const selectCheckedSortingValue = (state) => state.filterSorting.mode;
export const selectPriceBy = (state) => state.filterSettings.priceBy;
export const selectPriceTo = (state) => state.filterSettings.priceTo;

const PORT = process.env.REACT_APP_PORT || 5000;



export const fetchDataOfProducts1 = createAsyncThunk(
  "products/fetchDataOfProducts",
  async (collection, { dispatch }) => {
    const PORT = process.env.REACT_APP_PORT || 5000;
    const REACT_APP_BACK_URL = process.env.REACT_APP_BACK_URL || "http://localhost";

    try {
      console.log("2222222222222222");
      const response = await axios.get(
        `http://localhost:${PORT}/${'smartphones'}?page=${1}&limit=${3}`
      );
      console.log(response.data);
      dispatch(setProducts(response.data.products));
    
      return response.data.products;
    } catch (err) {
      console.log("Error fetching products:", err);
      throw err;
    }
  }
);

















export const fetchDataOfProducts = createAsyncThunk(
  "products/fetchDataOfProducts",
  async (collection, { dispatch }) => {
    const PORT = process.env.REACT_APP_PORT || 5000;
    const REACT_APP_BACK_URL = process.env.REACT_APP_BACK_URL || "http://localhost";

    try {
      const response = await axios.get(`${REACT_APP_BACK_URL}:${PORT}/${collection}`);
      dispatch(setProducts(response.data));
      return response.data;
    } catch (err) {
      console.log("Error fetching products:", err);
      throw err;
    }
  }
);

export const loadPageOfProducts = createAsyncThunk(
  "products/loadPageOfProducts",
  async ({ collection, page, limit }, { dispatch, getState }) => {
    const PORT = process.env.REACT_APP_PORT || 5000;

    const currentProducts = selectProducts(getState());
    const cardsOnPage = selectCardsOnPage(getState());
    const pageOfDB = selectPageOfDB(getState());
    const pagesToLoading = selectPagesToLoading(getState());
    const filterSettings = selectFilterSettings(getState());
    const priceBy = selectPriceBy(getState());
    const priceTo = selectPriceTo(getState());
    const checkedSortingValue = selectCheckedSortingValue(getState());

    try {
      const response = await axios.get(
        `http://localhost:${PORT}/${collection}?page=${page}&limit=${limit}&sortingMode=${checkedSortingValue}`
      );
      let loadedProduct = response.data[0];

      if (!loadedProduct) {
        dispatch(setPageOfDB(pageOfDB + 1));
        return currentProducts;
      }

      let filteredLoadedProduct;

      filteredLoadedProduct = filterByPrice([loadedProduct], priceBy, priceTo);

      if (filterSettings.length !== 0 && filteredLoadedProduct.length !== 0) {
        filteredLoadedProduct = filterProducts([loadedProduct], filterSettings);
      }
      loadedProduct = filteredLoadedProduct[0];

      if (!loadedProduct) {
        dispatch(setPageOfDB(pageOfDB + 1));
        return currentProducts;
      }

      const colorsInLoadedProduct = loadedProduct.colors.length;

      const lastProduct = { ...currentProducts[currentProducts.length - 1] };

      let currentProductsWithoutLast;

      if (lastProduct._id === loadedProduct._id) {
        currentProductsWithoutLast = currentProducts.slice(0, -1);
      } else {
        currentProductsWithoutLast = currentProducts;
      }

      const countOfProductCards = currentProductsWithoutLast.reduce((accumulator, product) => {
        return accumulator + product.colors.length;
      }, 0);

      if (cardsOnPage * pagesToLoading === colorsInLoadedProduct + countOfProductCards) {
        dispatch(setPageOfDB(pageOfDB + 1));
      } else if (cardsOnPage * pagesToLoading < colorsInLoadedProduct + countOfProductCards) {
        const difference = colorsInLoadedProduct + countOfProductCards - pagesToLoading * cardsOnPage;

        loadedProduct.colors = loadedProduct.colors.slice(0, -difference);
      } else if (cardsOnPage * pagesToLoading > colorsInLoadedProduct + countOfProductCards) {
        dispatch(setPageOfDB(pageOfDB + 1));
      }

      const allProducts = [...currentProductsWithoutLast, loadedProduct];

      return allProducts;
    } catch (err) {
      console.log("Error:", err);
      throw err;
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    productsDataLength: 0,
    pagesToLoading: 1,
    pageOfDB: 1,
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
    setPageOfDB: (state, action) => {
      state.pageOfDB = action.payload;
    },
    setProductsDataLength: (state, action) => {
      state.productsDataLength = action.payload;
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

    builder
      .addCase(loadPageOfProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadPageOfProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(loadPageOfProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setProducts, setPagesToLoading, setPageOfDB, setProductsDataLength } = productsSlice.actions;

export default productsSlice.reducer;
