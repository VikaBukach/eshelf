import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDataOfProducts = createAsyncThunk("products/fetchDataOfProducts", async (_, { dispatch }) => {
  try {
    const response = await fetch("./products.json");
    const productsDatabase = await response.json();

    console.log(productsDatabase);

    dispatch(setProducts(productsDatabase));

    return productsDatabase;
  } catch (e) {
    console.log("Помилка при виконанні fetch-запиту із завантаження бази товарів: ", e);
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
