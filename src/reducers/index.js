import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './auth';
import tradeHistoryReducer from './tradeHistory';
import profileReducer from './profile';
import privateNotificationReducer from './privateNotification';
import publicNotificationReducer from './publicNotification';
import errorReducer from './error';
import modalReducer from './modal';
import notificationReducer from './notificationDetail';
import balanceReducer from './balance';
import orderReducer from './order';
import orderDetailReducer from './orderDetail';
import physicalReducer from './physical';

export default combineReducers({
  routing: routerReducer,
  authReducer,
  tradeHistoryReducer,
  profileReducer,
  privateNotificationReducer,
  publicNotificationReducer,
  errorReducer,
  modalReducer,
  notificationReducer,
  balanceReducer,
  orderReducer,
  orderDetailReducer,
  physicalReducer
});