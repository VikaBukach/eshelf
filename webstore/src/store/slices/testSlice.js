import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: {
    test: "test",
  },
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = testSlice.actions;
export default testSlice.reducer;
