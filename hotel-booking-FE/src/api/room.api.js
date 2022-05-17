import http from "../utils/http";
export const roomApi = {
  createRoom(data) {
    return http.post("/hotel/room", data);
  },
  getRoomByHotelId(config) {
    return http.get("/hotel/room/searchAll", config);
  },
};
