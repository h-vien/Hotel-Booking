import http from "../utils/http";
export const roomApi = {
  createRoom(data) {
    return http.post("/hotel/room", data);
  },
  getRoomByHotelId(config) {
    return http.get("/hotel/room/searchAll", config);
  },
  searchRoomById(config) {
    return http.get("/hotel/room/search", config);
  },
  deleteRoomById(id) {
    console.log(id);
    return http.delete(`/hotel/room/${id}`);
  },
  updateRoomById(data) {
    console.log(data);
    return http.put(`/hotel/room`, data);
  },
};
