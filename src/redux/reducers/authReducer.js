import { USER_LOADED, LOGIN_SUCCESS, LOGOUT, LOGIN_FAIL } from "../types";

const initialState = {
  token: localStorage.getItem("token"),
  userName: null,
  isAuthenticated: null,
  role: localStorage.getItem("role"),
  loading: true,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        userName: payload.userName,
        role: payload.isAdmin,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        userName: payload.userName,
        isAuthenticated: true,
        role: payload.isAdmin,
        loading: false,
      };
    case LOGIN_FAIL:
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        role: null,
        loading: false,
        userName: null,
      };
    default:
      return state;
  }
};

export default authReducer;
