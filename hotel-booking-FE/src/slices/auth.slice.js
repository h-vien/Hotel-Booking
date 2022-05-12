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
export const registerMember = createAsyncThunk(
  "auth/registerMember",
  payloadCreator(authApi.registerMember)
);
// export const updateMe = createAsyncThunk(
//   "auth/updateMe",
//   payloadCreator(userApi.updateMe)
// );
const handleAuthFulfilled = (state, action) => {
  console.log(typeof action.payload.data);
  console.log(typeof action.payload.data === "object");
  if (typeof action.payload.data === "object") {
    console.log(typeof action.payload.data);
    state.profile = action.payload.data;
    localStorage.setItem(
      LocalStorage.user,
      JSON.stringify(action.payload.data)
    );
  }
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
    [registerMember.fulfilled]: (state, action) => {
      state.profile.roleId = 2;
      localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile));
    },
  },
});

const authReducer = auth.reducer;
export const unauthorize = auth.actions.unauthorize;
export default authReducer;
