import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { hotelApi } from "../api/hotel.api";
import { convertToJSON, payloadCreator } from "../utils/helper";

export const getHotels = createAsyncThunk(
  "hotel/search",
  payloadCreator(hotelApi.searchHotel)
);

const hotel = createSlice({
  name: "hotel",
  initialState: {
    hotels: {},
  },

  extraReducers: {
    [getHotels.fulfilled]: (state, action) => {
      const convertToJson = convertToJSON(action.payload.data);
      state.hotels = convertToJson;
    },
  },
});

const hotelReducer = hotel.reducer;
export default hotelReducer;
