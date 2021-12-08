import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/User";

type UserState = {
  email: string, 
  id: number,
}

const initialState = {
  email: "",
  id: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => {
      return {
        ...initialState,
      };
    },
    setUser: (state, action) => {
      return {
        ...action.payload,
      };
    },
  },
});

export const { setUser, resetUser } =
  userSlice.actions;

export default userSlice.reducer;
