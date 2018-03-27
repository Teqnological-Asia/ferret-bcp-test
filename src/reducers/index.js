import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './auth';
import reminderReducer from './reminder';
import tradeHistoryReducer from './tradeHistory';
import profileReducer from './profile';
import privateNotificationReducer from './privateNotification';
import publicNotificationReducer from './publicNotification';
import errorReducer from './error';

export default combineReducers({
  routing: routerReducer,
  authReducer,
  reminderReducer,
  tradeHistoryReducer,
  profileReducer,
  privateNotificationReducer,
  publicNotificationReducer,
  errorReducer
});