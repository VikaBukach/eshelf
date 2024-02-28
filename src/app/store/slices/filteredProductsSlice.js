import { createSlice, createAsyncThunk, createSelector  } from "@reduxjs/toolkit";

export const updateBaseFilterData = createAsyncThunk('baseFilter/updateBaseFilterData', async (updatedData) => {
  return updatedData;
});

const filteredProductsSlice = createSlice({
  name: "filteredProducts",
  initialState: {
    baseFilter: [],
    status: "idle",
  },
  reducers: {
    setBaseFilteredProducts: (state, action) => {
      state.baseFilter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(updateBaseFilterData.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateBaseFilterData.fulfilled, (state, action) => {
        state.baseFilter = action.payload;
        state.status = 'idle';
      });
  }
});

export const { setBaseFilteredProducts } = filteredProductsSlice.actions;
export default filteredProductsSlice.reducer;
export const selectFilteredProductsStatus = state => state.filteredProducts.status;