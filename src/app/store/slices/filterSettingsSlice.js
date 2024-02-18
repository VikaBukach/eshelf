import { createSlice } from "@reduxjs/toolkit";

const filterSettingsSlice = createSlice({
  name: "filterSettings",
  initialState: {
    checkboxes: {},
  },
  reducers: {
    setFilterSettings: (state, action) => {
      state.checkboxes = action.payload;
    },
  },
});

export const { setFilterSettings } = filterSettingsSlice.actions;
export default filterSettingsSlice.reducer;