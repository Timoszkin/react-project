import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/User';

export interface UserState {
  currentUser: User | null,
}

const initialState: User = {
  email: '',
  password: '',
  favorites: [],
  history: [],
  id: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser: (state) => {
      return {
        ...initialState
      }
    },
    setUser: (state, action) => {
      return {
        ...action.payload
      }
    },
    addFavorites: (state, action: { payload: string }) => {
      console.log('added fav');
      
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    },
    removeFavorites: (state, action) => {
      console.log('removed from favs');
      
      return {
        ...state,
        favorites: state.favorites.filter(el => el !== action.payload)
      }
    },
    addHistory: (state, action) => {
      // state.history.push(action.payload)
    },
  },
});

export const { setUser, resetUser, addFavorites, removeFavorites, addHistory } = userSlice.actions;

export default userSlice.reducer;
