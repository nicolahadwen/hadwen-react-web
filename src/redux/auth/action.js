import api from '../../api';

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const loginFailure = e => ({
  type: LOGIN_FAILURE,
  error: e
});


export const login = ({
  email,
  password
}) => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await api.login({ email, password });
    console.log(response);
    return dispatch(loginSuccess());
  } catch (e) {
    console.log('error: ', e);
    return dispatch(loginFailure(e))
  }
};
