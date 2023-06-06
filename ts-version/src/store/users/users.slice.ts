import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getUserById } from "./users.actions";
import { IInitialUserState, IUser } from "../../types/user.types";

const initialState: IInitialUserState = {
  isLoading: false,
  error: null,
  user: {} as IUser,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserById.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(getUserById.rejected, (state, action: any) => {
        state.isLoading = true;
        state.error = action.payload.error;
        state.user = {} as IUser;
      });
  },
});
