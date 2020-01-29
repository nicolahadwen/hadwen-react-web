import { combineReducers } from 'redux/index';

import authReducer from './auth/reducer';
import userReducer from './user/reducer';

export default combineReducers({
  auth: authReducer,
  user: userReducer
});

