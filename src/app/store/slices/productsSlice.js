import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { findValueByPath, findMinAndMaxPrice } from "../../helpers/catalog";
import { setFilterCriteriasWithTypes, setNumberOfValues } from "./filterSettingsSlice";
import { setMinPrice, setMaxPrice, setPriceBy, setPriceTo } from "./filterSettingsSlice";


export const selectProducts = (state) => state.products.data;
export const selectPageOfDB = (state) => state.products.pageOfDB;
export const selectProductsDataLength = (state) => state.products.productsDataLength;
export const selectCardsOnPage = (state) => state.products.cardsOnPage;
export const selectPagesToLoading = (state) => state.products.pagesToLoading;


const PORT = process.env.REACT_APP_PORT || 5000;

export const fetchDataOfProducts = createAsyncThunk(
  "products/fetchDataOfProducts",
  async (collection, { dispatch }) => {
    const PORT = process.env.REACT_APP_PORT || 5000;

    try {
      const response = await axios.get(`http://localhost:${PORT}/${collection}`);
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
      dispatch(setProductsDataLength(response.data.length));
      dispatch(setMinPrice(findMinAndMaxPrice(products).minValue));
      dispatch(setMaxPrice(findMinAndMaxPrice(products).maxValue));
      dispatch(setPriceBy(findMinAndMaxPrice(products).minValue));
      dispatch(setPriceTo(findMinAndMaxPrice(products).maxValue));
      const updatedFilterCriterias = [];
      const numberOfValues = {};
      filterCriterias.forEach((criteria) => {
        criteria.types = [];
        numberOfValues[criteria.path] = {};
        products.forEach((product) => {
          const { value: findVariations } = findValueByPath(product, criteria.path);

          findVariations.forEach((findVariation) => {
            if (numberOfValues[criteria.path][findVariation] && numberOfValues[criteria.path][findVariation] >= 1) {
              numberOfValues[criteria.path][findVariation]++;
            } else {
              numberOfValues[criteria.path][findVariation] = 1;
            }

            if (!criteria.types.includes(findVariation)) {
              criteria.types.push(findVariation);
            }
          });
        });

        updatedFilterCriterias.push({ title: criteria.title, types: criteria.types, path: criteria.path });
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






export const loadPageOfProducts = createAsyncThunk(
  "products/loadPageOfProducts",
  async ({ collection, page, limit }, { dispatch, getState }) => {
    const PORT = process.env.REACT_APP_PORT || 5000;

    const currentProducts = selectProducts(getState());
    const cardsOnPage = selectCardsOnPage(getState());
    const pageOfDB = selectPageOfDB(getState());
    const pagesToLoading = selectPagesToLoading(getState());
    const productsDataLength = selectProductsDataLength(getState());

    try {
      const response = await axios.get(`http://localhost:${PORT}/${collection}?page=${page}&limit=${limit}`);

      const loadedProduct = response.data[0];
      // console.log(loadedProduct);
      const colorsInLoadedProduct = Object.values(response.data).reduce((accumulator, { colors }) => {
        return accumulator + colors.length;
      }, 0);
      // console.log("Цветов в загруженном товаре:",colorsInLoadedProduct);

      // console.log("PAGE:", pagesToLoading);

      const lastProduct = {...currentProducts[currentProducts.length - 1]}

      let currentProductsWithoutLast;

      if (lastProduct._id === loadedProduct._id) {
        // console.log("ПОВТОРЕНИЕ ТОВАРА");

        currentProductsWithoutLast = currentProducts.slice(0, -1);
        // console.log("Товары, с убранным повторением:", currentProductsWithoutLast);
        
      } else {
        currentProductsWithoutLast = currentProducts;
      }

      const countOfProductCards = currentProductsWithoutLast.reduce((accumulator, product) => {
        return accumulator + product.colors.length;
      }, 0);

      

      // Если карточек ХВАТАЕТ
      if (cardsOnPage * pagesToLoading === colorsInLoadedProduct + countOfProductCards) {
        // console.log("Карточек сколько нужно");
        dispatch(setPageOfDB(pageOfDB + 1));
      } 
      else if (cardsOnPage * pagesToLoading < colorsInLoadedProduct + countOfProductCards) {
        // console.log("Карточек больше, чем нужно");
        const difference = (colorsInLoadedProduct + countOfProductCards) - (pagesToLoading * cardsOnPage);
        // console.log("Карточек больше на", difference);
        loadedProduct.colors = loadedProduct.colors.slice(0, -difference);
        // console.log("Убрали лишние карточки-цвета", loadedProduct);
        // loadedProduct - продукт, с сокращенным количеством карточек
      }
      else if (cardsOnPage * pagesToLoading > colorsInLoadedProduct + countOfProductCards) {
        // console.log("Карточек МЕНЬШЕ, чем нужно");
        dispatch(setPageOfDB(pageOfDB + 1));
      }

        const allProducts = [...currentProductsWithoutLast, loadedProduct];

        // console.log("Список товаров на ЗАВЕРШЕНИЕ функции", allProducts);

      return allProducts;
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
    productsDataLength: 0,
    pagesToLoading: 1,
    pageOfDB: 1,
    cardsOnPage: 6,
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
      // Обработчики для fetchDataOfProducts
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
      // Обработчики для loadPageOfProducts
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
