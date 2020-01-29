import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './actionTypes';

const initialState = {
  isLoggingIn: false,
  isLoggedIn: false
};

export default (state=initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        error: action.payload
      };
    default:
      return state;
  }
};

