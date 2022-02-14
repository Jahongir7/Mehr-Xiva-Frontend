import api from "./api";

const authToken = (token, role) => {
  if (token) {
    api.defaults.headers.common.authorization = token;
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
  } else {
    delete api.defaults.headers.common.authorization;
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }
};

export default authToken;
