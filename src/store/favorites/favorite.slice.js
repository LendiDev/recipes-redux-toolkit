import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: recipe }) => {
      const isRecipeExists = state.some((r) => r.id === recipe.id);

      if (isRecipeExists) {
        const index = state.findIndex((item) => item.id === recipe.id);

        if (index !== -1) {
          state.splice(index, 1);
        }
      } else {
        state.push(recipe);
      }
    },
  },
});

export const { actions, reducer } = favoritesSlice;
