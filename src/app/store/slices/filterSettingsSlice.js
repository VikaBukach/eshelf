import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { findValueByPath, findMinAndMaxPrice } from "../../helpers/catalog";
import { filterProducts } from "../../helpers/catalog";
import { setProductsDataLength } from "./productsSlice";





export const selectProducts = (state) => state.products.data;
export const selectPageOfDB = (state) => state.products.pageOfDB;
export const selectProductsDataLength = (state) => state.products.productsDataLength;
export const selectCardsOnPage = (state) => state.products.cardsOnPage;
export const selectPagesToLoading = (state) => state.products.pagesToLoading;
export const selectFilterSettings = (state) => state.filterSettings.checkboxes;


const PORT = process.env.REACT_APP_PORT || 5000;


export const addVariationsToFilterCriterias = createAsyncThunk(
  "filterSettings/addVariationsToFilterCriterias",
  async ({ collection, filterCriterias }, { dispatch, getState }) => {
    const filterSettings = selectFilterSettings(getState());

    try {
      const response = await axios.get(`http://localhost:${PORT}/${collection}`);
      const products = response.data;

      const productsWithFilter =
        filterSettings.length !== 0 ? filterProducts(response.data, filterSettings) : response.data;

      dispatch(setProductsDataLength(response.data.length));
      dispatch(setMinPrice(findMinAndMaxPrice(products).minValue));
      dispatch(setMaxPrice(findMinAndMaxPrice(products).maxValue));
      dispatch(setPriceBy(findMinAndMaxPrice(products).minValue));
      dispatch(setPriceTo(findMinAndMaxPrice(products).maxValue));
      const updatedFilterCriterias = [];
      const numberOfValues = {};
      filterCriterias.forEach((criteria) => {
        let productsWithFilterValues = [];
        productsWithFilter.forEach((product) => {
          const { value: findValues } = findValueByPath(product, criteria.path);
          productsWithFilterValues = [...productsWithFilterValues, ...findValues];
        });

        let allVariations = [];
        criteria.types = [];
        numberOfValues[criteria.path] = {};
        products.forEach((product) => {
          const { value: findVariations } = findValueByPath(product, criteria.path);
          allVariations = [...allVariations, ...findVariations];

          findVariations.forEach((findVariation) => {
            if (numberOfValues[criteria.path][findVariation] && numberOfValues[criteria.path][findVariation] >= 1) {
              numberOfValues[criteria.path][findVariation]++;
            } else {
              numberOfValues[criteria.path][findVariation] = 1;
            }
          });
        });

        allVariations = [...new Set(allVariations)];

        allVariations.forEach((variation) => {
          const numberOfVariationInFilteredProducts = productsWithFilterValues.filter(
            (product) => product === variation
          ).length;

          numberOfValues[criteria.path][variation] = numberOfVariationInFilteredProducts;
        });

        updatedFilterCriterias.push({ title: criteria.title, types: allVariations, path: criteria.path });
      });

      dispatch(setFilterCriteriasWithTypes(updatedFilterCriterias));
      dispatch(setNumberOfValues(numberOfValues));

      return updatedFilterCriterias;
    } catch (err) {
      console.log("Error fetching brand names:", err);
      throw err;
    }
  }
);



















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
    status: "idle",
    error: null,
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
  extraReducers: (builder) => {
      builder
      // Обработчики для addVariationsToFilterCriterias
      .addCase(addVariationsToFilterCriterias.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addVariationsToFilterCriterias.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(addVariationsToFilterCriterias.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setCheckboxesSettings, setMinPrice, setMaxPrice, setPriceBy, setPriceTo, setFilterCriteriasWithTypes, setNumberOfValues } = filterSettingsSlice.actions;
export default filterSettingsSlice.reducer;
