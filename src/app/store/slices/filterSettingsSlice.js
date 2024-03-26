import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { findValueByPath, findMinAndMaxPrice } from "../../helpers/catalog";
import { filterProducts, filterByPrice } from "../../helpers/catalog";
import { setProductsDataLength } from "./productsSlice";

export const selectProducts = (state) => state.products.data;
export const selectPageOfDB = (state) => state.products.pageOfDB;
export const selectProductsDataLength = (state) => state.products.productsDataLength;
export const selectCardsOnPage = (state) => state.products.cardsOnPage;
export const selectPagesToLoading = (state) => state.products.pagesToLoading;
export const selectFilterSettings = (state) => state.filterSettings.checkboxes;
export const selectPriceBy = (state) => state.filterSettings.priceBy;
export const selectPriceTo = (state) => state.filterSettings.priceTo;

const PORT = process.env.REACT_APP_PORT || 5000;

// export const fillFilterCriterias = (collectionName) => async (dispatch) => {
//   try {
//     console.log("22222222");
//     const res = await axios.get(`http://localhost:5000/getMinAndMaxPrices/${collectionName}`);
//     dispatch({ type: 'FILL_FILTER', payload: res.data });
//     console.log(res.data);
//   } catch (error) {
//     console.error('Error fetching min and max prices:', error);
//     throw error;
//   }
// };

export const getMinAndMaxPrice =
  ({ collection, filterSettings }) =>
  async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:5000/getMinAndMaxPrices/?collection=${collection}`, {
        params: {
          filterSettings: filterSettings,
        },
      });
      dispatch({ type: "FILL_FILTER", payload: res.data });
      dispatch(setMinPrice(res.data.minPrice));
      dispatch(setMaxPrice(res.data.maxPrice));
    } catch (error) {
      console.error("Error fetching min and max prices:", error);
      throw error;
    }
  };

export const fillTheFilter =
  ({ collection, filterSettings, filterCriterias }) =>
  async (dispatch) => {
    try {
      const filterCriteriasArray = [];
      filterCriterias.forEach((criteria) => {
        filterCriteriasArray.push(criteria.path);
      });

      const res = await axios.get(`http://localhost:5000/fill-the-filter/?collection=${collection}`, {
        params: {
          filterSettings: filterSettings,
          filterCriterias: filterCriteriasArray,
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
  };

// export const fillTheFilter = createAsyncThunk(
//   "products/fillTheFilter",
//   async ({ collection, checkboxFilterSettings }, { dispatch }) => {
//     const PORT = process.env.REACT_APP_PORT || 5000;
//     const REACT_APP_BACK_URL = process.env.REACT_APP_BACK_URL || "http://localhost";

//     try {
//       console.log(checkboxFilterSettings);
//       const response = await axios.get(`http://localhost:${PORT}/getMinAndMaxPrices/${"Smartphone"}`);
//       console.log(response.data);

//       return response.data;
//     } catch (err) {
//       console.log("Error fetching products:", err);
//       throw err;
//     }
//   }
// );

export const addVariationsToFilterCriterias = createAsyncThunk(
  "filterSettings/addVariationsToFilterCriterias"
  // async ({ collection, filterCriterias }, { dispatch, getState }) => {
  //   let filterSettings = selectFilterSettings(getState());
  //   const priceBy = selectPriceBy(getState());
  //   const priceTo = selectPriceTo(getState());

  //   try {
  //     const response = await axios.get(`http://localhost:${PORT}/${collection}`);
  //     const products = response.data;

  //     const productsWithFilter =
  //       filterSettings.length !== 0 ? filterProducts(response.data, filterSettings) : response.data;

  //     const colorsInProducts = filterByPrice(productsWithFilter).reduce((accumulator, product) => {
  //       return accumulator + product.colors.length;
  //     }, 0);

  //     dispatch(setCardsInAllFilteredProducts(colorsInProducts));
  //     dispatch(setProductsDataLength(products.length));
  //     dispatch(setMinPrice(findMinAndMaxPrice(productsWithFilter).minValue));
  //     dispatch(setMaxPrice(findMinAndMaxPrice(productsWithFilter).maxValue));
  //     dispatch(setPriceBy(priceBy ? priceBy : 0));
  //     dispatch(setPriceTo(priceTo ? priceTo : 0));

  //     const updatedFilterCriterias = [];

  //     const numberOfValues = {};

  //     filterCriterias.forEach((criteria) => {
  //       let productsWithFilterValues = [];
  //       productsWithFilter.forEach((product) => {
  //         const { value: findValues } = findValueByPath(product, criteria.path);
  //         productsWithFilterValues = [...productsWithFilterValues, ...findValues];
  //       });

  //       let allVariations = [];
  //       criteria.types = [];
  //       numberOfValues[criteria.path] = {};
  //       products.forEach((product) => {
  //         const { value: findVariations } = findValueByPath(product, criteria.path);
  //         allVariations = [...allVariations, ...findVariations];

  //         findVariations.forEach((findVariation) => {
  //           if (numberOfValues[criteria.path][findVariation] && numberOfValues[criteria.path][findVariation] >= 1) {
  //             numberOfValues[criteria.path][findVariation]++;
  //           } else {
  //             numberOfValues[criteria.path][findVariation] = 1;
  //           }
  //         });
  //       });

  //       allVariations = [...new Set(allVariations)];

  //       allVariations.forEach((variation) => {
  //         const numberOfVariationInFilteredProducts = productsWithFilterValues.filter(
  //           (product) => product === variation
  //         ).length;

  //         numberOfValues[criteria.path][variation] = numberOfVariationInFilteredProducts;
  //       });

  //       updatedFilterCriterias.push({ title: criteria.title, types: allVariations, path: criteria.path });
  //     });

  //     dispatch(setFilterCriteriasWithTypes(updatedFilterCriterias));
  //     dispatch(setNumberOfValues(numberOfValues));

  //     return updatedFilterCriterias;
  //   } catch (err) {
  //     console.log("Error:", err);
  //     throw err;
  //   }
  // }
);

export const updateByFilter = createAsyncThunk(
  "filterSettings/updateByFilter"
  // async ({ collection, filterCriterias, isReset = false }, { dispatch, getState }) => {
  //   let filterSettings = selectFilterSettings(getState());
  //   const priceBy = selectPriceBy(getState());
  //   const priceTo = selectPriceTo(getState());

  //   try {
  //     const response = await axios.get(`http://localhost:${PORT}/${collection}`);
  //     const products = response.data;
  //     dispatch(setProductsDataLength(products.length));

  //     let filteredProducts;

  //     if (isReset) {
  //       dispatch(setCheckboxesSettings([]));
  //       filterSettings = [];
  //     }

  //     // Якщо є хоча б одне налаштування фільтрації
  //     if (Object.values(filterSettings).some((settingType) => Array.isArray(settingType) && settingType.length > 0)) {
  //       filteredProducts = filterProducts(products, filterSettings);
  //     } else {
  //       filteredProducts = products;
  //     }

  //     const minValue = findMinAndMaxPrice(filteredProducts ? filteredProducts : products).minValue;
  //     const maxValue = findMinAndMaxPrice(filteredProducts ? filteredProducts : products).maxValue;

  //     dispatch(setMinPrice(minValue));
  //     dispatch(setMaxPrice(maxValue));

  //     const numberOfValues = {};

  //     filterCriterias.forEach((criteria) => {
  //       let allValuesInFilteredProducts = [];
  //       let allValuesInAllProducts = [];

  //       criteria.types = [];
  //       numberOfValues[criteria.path] = {};

  //       filteredProducts.forEach((product) => {
  //         const { value: findValues } = findValueByPath(product, criteria.path);
  //         allValuesInFilteredProducts = [...allValuesInFilteredProducts, ...findValues];
  //       });

  //       const colorsInProducts = filterByPrice(filteredProducts, priceBy, priceTo).reduce((accumulator, product) => {
  //         return accumulator + product.colors.length;
  //       }, 0);

  //       dispatch(setCardsInAllFilteredProducts(colorsInProducts));

  //       products.forEach((product) => {
  //         const { value: findValues } = findValueByPath(product, criteria.path);
  //         allValuesInAllProducts = [...allValuesInAllProducts, ...findValues];
  //       });

  //       allValuesInAllProducts = [...new Set(allValuesInAllProducts)];

  //       allValuesInAllProducts.forEach((value) => {
  //         const numberOfVariationInFilteredProducts = allValuesInFilteredProducts.filter(
  //           (valueInFilteredProduct) => valueInFilteredProduct === value
  //         ).length;

  //         numberOfValues[criteria.path][value] = numberOfVariationInFilteredProducts;
  //       });
  //     });

  //     dispatch(setNumberOfValues(numberOfValues));

  //     return true;
  //   } catch (err) {
  //     console.log("Error:", err);
  //     throw err;
  //   }
  // }
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
    cardsInAllFilteredProducts: 0,
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
    setCardsInAllFilteredProducts: (state, action) => {
      state.cardsInAllFilteredProducts = action.payload;
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

    builder
      // Обработчики для updateByFilter
      .addCase(updateByFilter.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateByFilter.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(updateByFilter.rejected, (state, action) => {
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
  setCardsInAllFilteredProducts,
} = filterSettingsSlice.actions;
export default filterSettingsSlice.reducer;
