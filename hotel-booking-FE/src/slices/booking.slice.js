import { createAsyncThunk } from "@reduxjs/toolkit";
import { bookingApi } from "../api/booking.api";
import { payloadCreator } from "../utils/helper";

export const booking = createAsyncThunk(
  "booking",
  payloadCreator(bookingApi.booking)
);
export const getPurchase = createAsyncThunk(
  "booking/purchase",
  payloadCreator(bookingApi.getPurchase)
);
export const getPurchaseByStatus = createAsyncThunk(
  "booking/purchaseByStatus",
  payloadCreator(bookingApi.getPurchaseByStatus)
);
export const updatePurchaseStatus = createAsyncThunk(
  "booking/purchaseByStatus",
  payloadCreator(bookingApi.updateStatus)
);
export const getStats = createAsyncThunk(
  "booking/stats",
  payloadCreator(bookingApi.getRevenue)
);
