import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PORT = process.env.REACT_APP_PORT || 5000;

export const getMinAndMaxPrices = createAsyncThunk(
  "filterSettings/getMinAndMaxPrices",
  async ({ collection, filterSettings }, { dispatch }) => {
    try {
      const res = await axios.get(`http://localhost:${PORT}/get-min-and-max-prices/?collection=${collection}`, {
        params: {
          filterSettings: filterSettings,
        },
      });
      const { minPrice, maxPrice } = res.data;
      dispatch(setMinPrice(minPrice));
      dispatch(setMaxPrice(maxPrice));
    } catch (error) {
      console.error("Error fetching min and max prices (in slice):", error);
      throw error;
    }
  }
);

export const fillTheFilter = createAsyncThunk(
  "filterSettings/fillTheFilter",
  async ({ collection, filterSettings, filterCriterias, priceBy, priceTo }, { dispatch }) => {
    try {
      const filterCriteriasArray = [];
      filterCriterias.forEach((criteria) => {
        filterCriteriasArray.push(criteria.path);
      });

      const res = await axios.get(`http://localhost:${PORT}/fill-the-filter/?collection=${collection}`, {
        params: {
          filterSettings: filterSettings,
          filterCriterias: filterCriteriasArray,
          priceBy: priceBy,
          priceTo: priceTo,
        },
      });
      dispatch({ type: "FILL_FILTER", payload: res.data });

      const { allValuesFromAllProducts, allValuesFromFilteredProducts } = res.data;

      const updatedFilterCriterias = filterCriterias.map((criteria) => {
        return {
          ...criteria,
          types: [...new Set(allValuesFromAllProducts[criteria.path])],
        };
      });

      const numberOfValues = {};

      updatedFilterCriterias.forEach((criteria) => {
        numberOfValues[criteria.path] = {};
        criteria.types.forEach((type) => {
          numberOfValues[criteria.path][type] = 0;

          numberOfValues[criteria.path][type] = allValuesFromFilteredProducts[criteria.path].filter(
            (value) => value === type
          ).length;
        });
      });

      dispatch(setFilterCriteriasWithTypes(updatedFilterCriterias));
      dispatch(setNumberOfValues(numberOfValues));
    } catch (error) {
      console.error("Error fetching filter fill:", error);
      throw error;
    }
  }
);

const filterSettingsSlice = createSlice({
  name: "filterSettings",
  initialState: {
    checkboxes: [],
    filterCriteriasWithTypes: [],
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
      .addCase(getMinAndMaxPrices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMinAndMaxPrices.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(getMinAndMaxPrices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(fillTheFilter.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fillTheFilter.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(fillTheFilter.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  setCheckboxesSettings,
  setMinPrice,
  setMaxPrice,
  setPriceBy,
  setPriceTo,
  setFilterCriteriasWithTypes,
  setNumberOfValues,
} = filterSettingsSlice.actions;
export default filterSettingsSlice.reducer;
