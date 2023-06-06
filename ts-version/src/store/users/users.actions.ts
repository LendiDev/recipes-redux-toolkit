import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../types/user.types";

const fetchUserById = (userId: number): Promise<IUser> => {
  console.log(`fetching userId: ${userId}`);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Nikita",
      });
    }, 1000);
  });
};

export const getUserById = createAsyncThunk<IUser, number>(
  "users/by_id",
  async (userId, thunkApi) => {
    try {
      const user = await fetchUserById(userId);
      return user;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
