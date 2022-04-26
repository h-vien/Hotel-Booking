import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import authApi from "../api/auth.api";
import LocalStorage from "../constant/localStorage";
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
  state.profile = action.payload.data;
  localStorage.setItem(LocalStorage.user, JSON.stringify(action.payload.data));
};
const handleUnauth = (state) => {
  console.log("Logout");
  state.profile = {};
  localStorage.removeItem(LocalStorage.user);
};

const auth = createSlice({
  name: "auth",
  initialState: {
    profile: JSON.parse(localStorage.getItem(LocalStorage.user)) || {},
  },
  reducers: {
    unauthorize: handleUnauth,
  },
  extraReducers: {
    [register.fulfilled]: handleAuthFulfilled,
    [login.fulfilled]: handleAuthFulfilled,
    [logout.fulfilled]: handleUnauth,
  },
});

const authReducer = auth.reducer;
export const unauthorize = auth.actions.unauthorize;
export default authReducer;
