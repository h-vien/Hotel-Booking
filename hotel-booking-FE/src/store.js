import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";
import hotelReducer from "./slices/hotel.slice";

const rootReducer = {
  auth: authReducer,
  hotel: hotelReducer,
};
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
  ],
});
export default store;
