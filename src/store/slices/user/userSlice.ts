import { createSlice } from "@reduxjs/toolkit";

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
    setUser: (_state, action) => {
      return {
        ...action.payload,
      };
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
