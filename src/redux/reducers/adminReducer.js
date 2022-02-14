import {
  ADMIN_ERROR,
  ADMIN_GET_COMPANY,
  ADMIN_ADD_COMPANY,
  ADMIN_GET_STORY,
  ADMIN_DELETE_COMPANY,
  ADMIN_ADD_STORY,
  ADMIN_GET_COMPANY_BY_ID,
} from "../types";

const initialState = {
  loading: true,
  companies: [],
  company: {},
  notes: [],
  message: "",
  error: null,
};

const adminReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADMIN_GET_COMPANY:
      return {
        loading: false,
        companies: payload,
      };
    case ADMIN_GET_COMPANY_BY_ID:
      return {
        ...state,
        loading: false,
        company: payload,
      };
    case ADMIN_GET_STORY:
      return {
        ...state,
        loading: false,
        notes: payload,
      };

    case ADMIN_ADD_COMPANY:
      return {
        ...state,
        loading: false,
        message: payload.data.message,
      };
    case ADMIN_ADD_STORY:
      return {
        ...state,
        loading: false,
        message: payload.message,
      };

    case ADMIN_DELETE_COMPANY:
      return {
        ...state,
        loading: false,
        message: payload.message,
      };
    case ADMIN_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default adminReducer;
