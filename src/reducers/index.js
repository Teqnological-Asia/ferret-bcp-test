import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './auth';
import reminderReducer from './reminder';

export default combineReducers({
  routing: routerReducer,
  authReducer,
  reminderReducer
});