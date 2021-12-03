import React from "react";
import userReducer, {addFavorites, removeFavorites} from './user/userSlice';
import { useDispatch } from "react-redux";
import { User } from "../types/User";
import { Middleware } from "redux";
import { useNavigate } from "react-router";

const userActionList = ['user/addFavorites', 'user/removeFavorites']
const сustomMiddleware: Middleware = (store) => (next) => (action) => {

  console.log('action: ', action.payload)
  const state = store.getState();

  if(userActionList.includes(action.type) && state.userSlice.email) {
    switch(action.type) {
      case userActionList[0]: {
        addFavorites(action.payload.favorites);
        break;
      }
      case userActionList[1]: {
        removeFavorites(action.payload.favorites);
        break;
      }
    }
  }
  else {
    // const navigate = useNavigate();
    // navigate('/signup');ы
  }
}

export default сustomMiddleware;