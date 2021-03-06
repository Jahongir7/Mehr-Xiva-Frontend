import api from '../../utility/api';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, USER_LOADED, CLEAR_STORE } from '../types';
import { setAlert } from '../../utility/setAlert';

export const login = (body) => async (dispatch) => {
  try {
    const res = await api.post(`/login`, body);
    setAlert('Muvaffaqiyatli kirildi!', 'success');
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    setAlert('Noto`g`ri ma`lumot kiritildi!', 'error');
    console.log(err);
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get(`/load-user`);

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  dispatch({ type: CLEAR_STORE });
};

export const checkToken = (expirationTime) => (dispatch) => {
  setTimeout(() => {
    dispatch(logout());
  }, expirationTime * 1000);
};
