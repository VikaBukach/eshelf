import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { findValueByPath } from "../../helpers/catalog";
import { setFilterCriteriasWithTypes } from "./filterSettingsSlice";


const PORT = process.env.REACT_APP_PORT || 5000;

export const fetchDataOfProducts = createAsyncThunk(
  "products/fetchDataOfProducts",
  async ({ collection, page, limit }, { dispatch }) => {
    const PORT = process.env.REACT_APP_PORT || 5000;

    try {
      const response = await axios.get(`http://localhost:${PORT}/${collection}?page=${page}&limit=${limit}`);
      dispatch(setProducts(response.data));
      return response.data;
    } catch (err) {
      console.log("Error fetching products:", err);
      throw err;
    }
  }
);

export const addVariationsToFilterCriterias = createAsyncThunk(
  "products/addVariationsToFilterCriterias",
  async ({ collection, filterCriterias }, { dispatch }) => {
    try {
      const response = await axios.get(`http://localhost:${PORT}/${collection}`);
      const products = response.data;
      const updatedFilterCriterias = [];
      filterCriterias.forEach((criteria) => {
        criteria.types = [];
        products.forEach((product) => {
          const { value: findVariations } = findValueByPath(product, criteria.path);

          findVariations.forEach((findVariation) => {
            if (!criteria.types.includes(findVariation)) {
              criteria.types.push(findVariation);
            }
          });
        });
        updatedFilterCriterias.push({ title: criteria.title, types: criteria.types, path: criteria.path });
      });
      console.log(updatedFilterCriterias);
      dispatch(setFilterCriteriasWithTypes(updatedFilterCriterias));
      return updatedFilterCriterias;
    } catch (err) {
      console.log("Error fetching brand names:", err);
      throw err;
    }
  }
);





const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    activeCategoryName: "",
    status: "idle",
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setActiveCategoryName: (state, action) => {
      state.activeCategoryName = action.payload;
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

export const { setProducts, setActiveCategoryName } = productsSlice.actions;

export default productsSlice.reducer;
