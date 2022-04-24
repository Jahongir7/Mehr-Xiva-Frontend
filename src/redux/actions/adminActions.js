import api from '../../utility/api';
import {
  ADMIN_ERROR,
  ADMIN_GET_COMPANY,
  ADMIN_ADD_COMPANY,
  ADMIN_GET_STORY,
  ADMIN_DELETE_COMPANY,
  ADMIN_ADD_STORY,
  ADMIN_GET_COMPANY_BY_ID,
  ADMIN_DELETE_STORY,
  ADMIN_UPDATE_NOTE,
  ADMIN_UPDATE_COMPANY
} from '../types';
import { setAlert } from '../../utility/setAlert';

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
    setAlert("Muvaffaqiyatli qo'shildi!", 'success');
    dispatch({
      type: ADMIN_ADD_COMPANY,
      payload: res
    });
  } catch (err) {
    setAlert('Xatolik yuzaga keldi!', 'error');
    dispatch({
      type: ADMIN_ERROR
    });
  }
};

export const deleteCompany = (id) => async (dispatch) => {
  try {
    const res = await api.delete(`/admin/companies/${id}`);
    setAlert("Muvaffaqiyatli o'chirildi!", 'success');

    dispatch({
      type: ADMIN_DELETE_COMPANY,
      payload: res
    });
  } catch (err) {
    setAlert('Xatolik yuzaga keldi!', 'error');
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
    setAlert('Xatolik yuzaga keldi!', 'error');
    dispatch({
      type: ADMIN_ERROR
    });
  }
};

export const updateStory = (formData, id) => async (dispatch) => {
  try {
    delete formData._id;
    console.log(formData);
    const res = await api.put(`/admin/notes/${id}`, formData);

    dispatch({
      type: ADMIN_UPDATE_NOTE,
      payload: res
    });
  } catch (err) {
    setAlert('Xatolik yuzaga keldi!', 'error');
    dispatch({
      type: ADMIN_ERROR
    });
  }
};

export const updateCompany = (formData, id) => async (dispatch) => {
  try {
    delete formData._id;
    console.log(formData);
    const res = await api.put(`/admin/companies/${id}`, formData);
    setAlert('Muvaffaqiyatli yangilandi!', 'success');
    dispatch({
      type: ADMIN_UPDATE_COMPANY,
      payload: res
    });
  } catch (err) {
    dispatch({
      type: ADMIN_ERROR
    });
  }
};
