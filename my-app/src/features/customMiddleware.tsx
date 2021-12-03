import React from "react";
import userReducer, {addFavorites, removeFavorites} from './user/userSlice';
import { useDispatch } from "react-redux";
import { User } from "../types/User";
import { Middleware } from "redux";
import { useNavigate } from "react-router";

const userActionList = ['user/addFavorites', 'user/removeFavorites']
const сustomMiddleware = (store: any) => (next: any) => (action: any) => {

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
    const navigate = useNavigate();
    navigate('/signup');
  }
}

export default сustomMiddleware

// export const AUTH_ACTIONS = ["auth/ADDED_HISTORY", "auth/TOGGLED_FAV"];

// const authGuard: Middleware = (store) => (next) => (action) => {
//   const state = store.getState();
//   const login = state.auth.login;
//   const isAuthAction = AUTH_ACTIONS.includes(action.type);
//   if (isAuthAction) {
//     if (login) {
//       const { toggleFav, addHistory } = useUserData(login);
//       switch (action.type) {
//         case "auth/ADDED_HISTORY": {
//           addHistory(action.payload);
//           break;
//         }
//         case "auth/TOGGLED_FAV": {
//           toggleFav(action.payload.id, action.payload.fav);
//           break;
//         }
//       }
//     } else {
//       return "/register";
//     }
//   }
//   next(action);
// };

// export default authGuard;