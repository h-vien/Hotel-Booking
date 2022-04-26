import http from "../utils/http";

const authApi = {
  register(data) {
    return http.post("user/register", data);
  },
  login(data) {
    return http.post("user/login", data);
  },
  logout() {
    return;
  },
};

export default authApi;
