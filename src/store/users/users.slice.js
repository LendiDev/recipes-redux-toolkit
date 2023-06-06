import { createSlice } from "@reduxjs/toolkit";
import { getUserById } from "./users.actions";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    error: null,
    user: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.payload.error;
        state.user = {};
      });
  },
});

