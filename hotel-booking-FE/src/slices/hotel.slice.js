import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { hotelApi } from "../api/hotel.api";
import LocalStorage from "../constant/localStorage";
import { payloadCreator } from "../utils/helper";

export const getHotels = createAsyncThunk(
  "hotel/search",
  payloadCreator(hotelApi.searchHotel)
);
export const updateProfileHotel = createAsyncThunk(
  "hotel/update",
  payloadCreator(hotelApi.updateProfileHotel)
);

const hotel = createSlice({
  name: "hotel",
  initialState: {
    hotelData: {},
  },

  extraReducers: {
    [getHotels.fulfilled]: (state, action) => {
      state.hotelData = action.payload.data;
    },
    [updateProfileHotel.fulfilled]: (state, action) => {
      localStorage.setItem(
        LocalStorage.hotel,
        JSON.stringify(action.payload.data)
      );
    },
  },
});

const hotelReducer = hotel.reducer;
export default hotelReducer;
