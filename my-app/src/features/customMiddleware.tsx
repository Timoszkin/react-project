import React from "react";
import { Middleware } from "redux";
import { addFavLocalStore, removeFavLocalStore } from "../app/localStoreFunctions";
const userActionList = ['favorites/addFav', 'favorites/removeFav']

const addFavoritesToLocalStoreMiddleware: Middleware = (store) => (next) => (action) => {
  console.log('mv', action.type)
  const state = store.getState();
  if(userActionList.includes(action.type)) {
    switch(action.type) {
      case userActionList[0]: {
        const getJsonUserFromLocalStore = JSON.parse(localStorage.getItem('user') || '[]')
        const getMailList = getJsonUserFromLocalStore.map((user: any) => {
          return Object.values(user)[0];
        })
        if(getMailList.includes(state.userSlice.email)) {
          console.log('add: ')
          console.log('lst: ', localStorage.getItem('user'))
          addFavLocalStore(state.userSlice.id, action.payload);
          
        }
        break;
      }
      case userActionList[1]: {
        console.log('remove: ')
        removeFavLocalStore(state.userSlice.id, action.payload);
        break;  
      }
    }
  }
  next(action);
}

export default addFavoritesToLocalStoreMiddleware;