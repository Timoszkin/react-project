import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import store from "../../app/store";

type FavotiesEntities = {
  id: number,
  movie: number,
}

const favoritesAdapter = createEntityAdapter<FavotiesEntities>();

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: favoritesAdapter.getInitialState(),
  reducers: {
    addFav: favoritesAdapter.addOne,
    removeFav: favoritesAdapter.removeOne,
    loadFavs: favoritesAdapter.setAll,
    removeAllFavs: favoritesAdapter.removeAll,
  }
});

export const { loadFavs, addFav, removeFav, removeAllFavs } = favoritesSlice.actions;
