import { combineReducers } from 'redux';

// @imports Reducers
import alert from './alert';
import auth from './auth';
import account from './account';

export default combineReducers({
  alert,
  auth,
  account,
});
