import { combineReducers } from "redux";
import authReducer from "./authReducer";
import adminReducer from "./adminReducer";

const appReducer = combineReducers({
  authReducer,
  adminReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
