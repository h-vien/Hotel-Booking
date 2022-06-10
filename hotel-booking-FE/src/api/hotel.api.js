import http from "../utils/http";
export const hotelApi = {
  searchHotel(config) {
    return http.get("/hotel/search", config);
  },
  updateProfileHotel(data) {
    return http.put("/hotel", data);
  },
};
