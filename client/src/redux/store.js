import { createStore, applyMiddleware } from 'redux/index'
import thunk from 'redux-thunk/index'

import reducer from './reducer';

export default createStore(
  reducer,
  applyMiddleware(thunk)
);
