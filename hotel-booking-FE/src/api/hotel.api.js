import http from "../utils/http";
export const hotelApi = {
  searchHotel(config) {
    console.log(config);
    return http.get("/hotel/search", config);
  },
};
