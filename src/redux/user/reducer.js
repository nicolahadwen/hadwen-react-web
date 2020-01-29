import { CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAILURE} from './actionTypes';

const initialState = {
  isCreatingUser: false,
  createdUserId: ''
};

export default (state=initialState, action) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return {
        ...state,
        isCreatingUser: true
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isCreatingUser: false,
        createdUserId: action.payload
      };
    case CREATE_USER_FAILURE:
      return {
        ...state,
        isCreatingUser: false,
        error: action.payload
      };
    default:
      return state;
  }
};

