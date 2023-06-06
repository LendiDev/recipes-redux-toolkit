import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserById = (userId) => {
  console.log(`fetching userId: ${userId}`);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          id: 1,
          name: "Nikita",
        },
      });
    }, 1000);
  });
};

export const getUserById = createAsyncThunk(
  "users/by_id",
  async (userId, thunkApi) => {
    try {
      const { user } = await fetchUserById(userId);
      return user;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
