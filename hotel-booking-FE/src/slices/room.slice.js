import { createAsyncThunk } from "@reduxjs/toolkit";
import { roomApi } from "../api/room.api";
import { payloadCreator } from "../utils/helper";

export const createRoom = createAsyncThunk(
  "hotel/room/create",
  payloadCreator(roomApi.createRoom)
);
export const getRoomByHotelId = createAsyncThunk(
  "hotel/room/getByHotelId",
  payloadCreator(roomApi.getRoomByHotelId)
);
