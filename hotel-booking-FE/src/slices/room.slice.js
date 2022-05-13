import { createAsyncThunk } from "@reduxjs/toolkit";
import { roomApi } from "../api/room.api";
import { payloadCreator } from "../utils/helper";

export const createRoom = createAsyncThunk(
  "hotel/room",
  payloadCreator(roomApi.createRoom)
);
