import api from '../../utility/api';
import {
  ADMIN_ERROR,
  ADMIN_GET_COMPANY,
  ADMIN_ADD_COMPANY,
  ADMIN_GET_STORY,
  ADMIN_DELETE_COMPANY,
  ADMIN_ADD_STORY,
  ADMIN_GET_COMPANY_BY_ID,
  ADMIN_DELETE_STORY
} from '../types';

export const getCompanyStories = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/admin/notes/${id}`);

    dispatch({
      type: ADMIN_GET_STORY,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ADMIN_ERROR
    });
  }
};

export const getCompany = () => async (dispatch) => {
  try {
    const res = await api.get(`/admin/companies`);
    dispatch({
      type: ADMIN_GET_COMPANY,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ADMIN_ERROR
    });
  }
};
export const getCompanyById = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/admin/companies/${id}`);
    dispatch({
      type: ADMIN_GET_COMPANY_BY_ID,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ADMIN_ERROR
    });
  }
};
export const addStory = (formData) => async (dispatch) => {
  try {
    const res = await api.post(`/admin/note`, formData);

    dispatch({
      type: ADMIN_ADD_STORY,
      payload: res
    });
  } catch (err) {
    dispatch({
      type: ADMIN_ERROR
    });
  }
};

export const addCompany = (formData) => async (dispatch) => {
  try {
    const res = await api.post(`/admin/company`, formData);

    dispatch({
      type: ADMIN_ADD_COMPANY,
      payload: res
    });
  } catch (err) {
    dispatch({
      type: ADMIN_ERROR
    });
  }
};

export const deleteCompany = (id) => async (dispatch) => {
  try {
    const res = await api.delete(`/admin/companies/${id}`);

    dispatch({
      type: ADMIN_DELETE_COMPANY,
      payload: res
    });
  } catch (err) {
    dispatch({
      type: ADMIN_ERROR
    });
  }
};
export const deleteStory = (id) => async (dispatch) => {
  try {
    const res = await api.delete(`/admin/notes/${id}`);

    dispatch({
      type: ADMIN_DELETE_STORY,
      payload: res
    });
  } catch (err) {
    dispatch({
      type: ADMIN_ERROR
    });
  }
};
