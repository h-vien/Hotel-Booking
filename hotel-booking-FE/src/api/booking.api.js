import http from "../utils/http";
export const bookingApi = {
  booking(data) {
    return http.post("/booking", data);
  },
  getPurchase(config) {
    return http.get("/booking/user", config);
  },
};
