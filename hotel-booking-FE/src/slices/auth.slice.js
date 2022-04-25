import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import authApi from "../api/auth.api";
import { payloadCreator } from "../utils/helper";

export const register = createAsyncThunk(
  "auth/register",
  payloadCreator(authApi.register)
);
export const login = createAsyncThunk(
  "auth/login",
  payloadCreator(authApi.login)
);
export const logout = createAsyncThunk(
  "auth/logout",
  payloadCreator(authApi.logout)
);

// export const updateMe = createAsyncThunk(
//   "auth/updateMe",
//   payloadCreator(userApi.updateMe)
// );
const handleAuthFulfilled = (state, action) => {
  console.log(action.payload);
};
// const handleUnauth = (state) => {
//   state.profile = {};
//   localStorage.removeItem(LocalStorage.user);
//   localStorage.removeItem(LocalStorage.accessToken);
// };

const auth = createSlice({
  name: "auth",
  initialState: {
    profile: {},
  },

  extraReducers: {
    [register.fulfilled]: handleAuthFulfilled,
  },
});

const authReducer = auth.reducer;
export const unauthorize = auth.actions.unauthorize;
export default authReducer;
