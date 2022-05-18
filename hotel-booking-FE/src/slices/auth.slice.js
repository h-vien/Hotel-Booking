import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import authApi from "../api/auth.api";
import LocalStorage from "../constant/localStorage";
import { convertToJSON, payloadCreator } from "../utils/helper";

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
  const _data = convertToJSON(action.payload.data);
  state.profile = _data;
  localStorage.setItem(LocalStorage.user, JSON.stringify(_data.user));
  localStorage.setItem(LocalStorage.hotel, JSON.stringify(_data.hotel));
};
const handleUnauth = (state) => {
  state.profile = {};
  localStorage.removeItem(LocalStorage.user);
};

const auth = createSlice({
  name: "auth",
  initialState: {
    profile:
      {
        hotel: JSON.parse(localStorage.getItem(LocalStorage.hotel)),
        user: JSON.parse(localStorage.getItem(LocalStorage.user)),
      } || {},
  },
  reducers: {
    unauthorize: handleUnauth,
  },
  extraReducers: {
    [register.fulfilled]: handleAuthFulfilled,
    [login.fulfilled]: handleAuthFulfilled,
    [logout.fulfilled]: handleUnauth,
    [registerMember.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.profile.hotel = action.payload.data;
      state.profile.user.roleId = 2;
      localStorage.setItem(
        LocalStorage.user,
        JSON.stringify(state.profile.user)
      );
      localStorage.setItem(
        LocalStorage.hotel,
        JSON.stringify(state.profile.hotel)
      );
    },
  },
});

const authReducer = auth.reducer;
export const unauthorize = auth.actions.unauthorize;
export default authReducer;
