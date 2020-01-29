import api from '../../api';

import {
  CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAILURE
} from './actionTypes';

export const createUserRequest = () => ({
  type: CREATE_USER_REQUEST
});

export const createUserSuccess = responseLocation => ({
  type: CREATE_USER_SUCCESS,
  payload: responseLocation
});

export const createUserFailure = e => ({
  type: CREATE_USER_FAILURE,
  error: e
});


export const createUser = ({
  email,
  firstName,
  lastName
}) => async dispatch => {
  dispatch(createUserRequest());
  try {
    const response = await api.createUser({
      email,
      firstName,
      lastName
    });
    console.log('response.headers: ', response.headers);
    return dispatch(createUserSuccess(response.headers.location));
  } catch (e) {
    console.log('error: ', e);
    return dispatch(createUserFailure(e))
  }
};
