import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { findValueByPath, findMinAndMaxPrice } from "../../helpers/catalog";





export const selectProducts = (state) => state.products.data;
export const selectPageOfDB = (state) => state.products.pageOfDB;
export const selectProductsDataLength = (state) => state.products.productsDataLength;
export const selectCardsOnPage = (state) => state.products.cardsOnPage;
export const selectPagesToLoading = (state) => state.products.pagesToLoading;


const PORT = process.env.REACT_APP_PORT || 5000;



















const filterSettingsSlice = createSlice({
  name: "filterSettings",
  initialState: {
    checkboxes: [],
    filterCriteriasWithTypes:[],
    minPrice: 0,
    maxPrice: 0,
    priceBy: 0,
    priceTo: 0,
    numberOfValues: {},
  },
  reducers: {
    setCheckboxesSettings: (state, action) => {
      state.checkboxes = action.payload;
    },
    setFilterCriteriasWithTypes: (state, action) => {
      state.filterCriteriasWithTypes = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setPriceBy: (state, action) => {
      state.priceBy = action.payload;
    },
    setPriceTo: (state, action) => {
      state.priceTo = action.payload;
    },
    setNumberOfValues: (state, action) => {
      state.numberOfValues = action.payload;
    },
  },
});

export const { setCheckboxesSettings, setMinPrice, setMaxPrice, setPriceBy, setPriceTo, setFilterCriteriasWithTypes, setNumberOfValues } = filterSettingsSlice.actions;
export default filterSettingsSlice.reducer;
