import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("authorize", async () => {
  const PORT = process.env.REACT_APP_PORT || 3001;
  const REACT_APP_BACK_URL = process.env.REACT_APP_BACK_URL || "http://localhost";
  const token = localStorage.getItem("token");

  if (!token) {
    throw null;
  }

  try {
    const response = await axios.get(`${REACT_APP_BACK_URL}:${PORT}/authorize`, {
      headers: {
        Authorization: JSON.parse(token),
      },
    });
    return response.data;
  } catch (err) {
    console.log("Error fetching products:", err);
    throw err;
  }
});

const authSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    loading: true,
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
  },
  reducers: {
    login: (state, action) => {
      const user = action.payload;

      const userData = {
        name: user.name,
        surname: user.surname,
        email: user.email,
      };

      state.data = userData;
      state.token = user.token;
    },
    logout: (state, action) => {
      state.token = null;
      state.data = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
      });
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
