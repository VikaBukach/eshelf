import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const updateFilteredProductsWithPrice = createAsyncThunk(
  'data/updateFilteredProductsWithPrice',
  async (updatedData) => {
    return updatedData;
  }
);



const filteredProductsWithPriceSlice = createSlice({
  name: "filteredProductsWithPrice",
  initialState: {
    data: [],
    status: "idle",
      },
  reducers: {
    setFilteredProductsWithPrice: (state, action) => {
      state.data = action.payload;
    },
      },
      extraReducers: builder => {
        builder
          .addCase(updateFilteredProductsWithPrice.pending, (state, action) => {
            state.status = 'loading';
          })
          .addCase(updateFilteredProductsWithPrice.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'idle';
          });
      }
    });

export const { setFilteredProductsWithPrice } = filteredProductsWithPriceSlice.actions;
export default filteredProductsWithPriceSlice.reducer;
export const selectFilteredProductsWithPriceStatus = state => state.filteredProductsWithPrice.status;