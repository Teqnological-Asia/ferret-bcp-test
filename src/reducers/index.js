import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './auth';
import reminderReducer from './reminder';
import tradeHistoryReducer from './tradeHistory';

export default combineReducers({
  routing: routerReducer,
  authReducer,
  reminderReducer,
  tradeHistoryReducer
});