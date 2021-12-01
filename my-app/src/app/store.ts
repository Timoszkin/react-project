import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import { movieSlice } from '../api/movieSlice';

export const store = configureStore({
  reducer: {
    userSlice: userReducer,
    // counter: counterReducer,
    [movieSlice.reducerPath]: movieSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(movieSlice.middleware)
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
