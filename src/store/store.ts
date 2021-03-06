import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "./slices/user/userSlice";
import { movieSlice } from "../api/movieSlice";
import addFavoritesToLocalStoreMiddleware from "./middleware";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { favoritesSlice } from "./slices/favorites/favoritesSlice";
import { historySlice } from "./slices/history/historySlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [movieSlice.reducerPath],
};

const rootReducer = combineReducers({
  historySlice: historySlice.reducer,
  favoriteSlice: favoritesSlice.reducer,
  userSlice: userReducer,
  [movieSlice.reducerPath]: movieSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      addFavoritesToLocalStoreMiddleware,
      movieSlice.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const persistedStore = persistStore(store);
export default store;
