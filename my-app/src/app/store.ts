import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import { movieSlice } from '../api/movieSlice';
import addFavoritesToLocalStoreMiddleware from '../features/customMiddleware'

export const store = configureStore({
  reducer: {
    userSlice: userReducer,
    // counter: counterReducer,
    [movieSlice.reducerPath]: movieSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) => 
  //   // getDefaultMiddleware().concat(customMiddleware, movieSlice.middleware )
  middleware: [addFavoritesToLocalStoreMiddleware]

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
