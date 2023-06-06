import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favouriteReducer } from "./favorites/favorite.slice";
import { userSlice } from "./users/users.slice";
import { api } from "./api/api";
import { recipesApi } from "./api/recipe.api";
import { createLogger } from "redux-logger";

const reduxLogger = createLogger({
  collapsed: true,
});

const reducers = combineReducers({
  favourites: favouriteReducer,
  users: userSlice.reducer,
  [api.reducerPath]: recipesApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(reduxLogger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
