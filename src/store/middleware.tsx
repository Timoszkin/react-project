import { Middleware } from "redux";
import {
  addFavLocalStore,
  removeFavLocalStore,
} from "../app/utils";
const userActionList = ["favorites/addFav", "favorites/removeFav"];

const addFavoritesToLocalStoreMiddleware: Middleware =
  (store) => (next) => (action) => {
    const state = store.getState();
    if (userActionList.includes(action.type)) {
      switch (action.type) {
        case userActionList[0]: {
          const getJsonUserFromLocalStore = JSON.parse(
            localStorage.getItem("user") || "[]"
          );
          const getMailList = getJsonUserFromLocalStore.map((user: any) => {
            return Object.values(user)[0];
          });
          if (getMailList.includes(state.userSlice.email)) {
            addFavLocalStore(state.userSlice.id, action.payload.movie);
          }
          break;
        }
        case userActionList[1]: {
          removeFavLocalStore(state.userSlice.id, action.payload);
          break;
        }
      }
    }
    next(action);
  };

export default addFavoritesToLocalStoreMiddleware;
