import { LOAD_PRIVATE_NOTIFICATIONS_SUCCESS, LOAD_PRIVATE_NOTIFICATIONS_FAILURE } from '../constants/privateNotification';

const initialState = {
  notifications: [],
  error: null
};

export const privateNotificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRIVATE_NOTIFICATIONS_SUCCESS:
      return {
        notifications: action.notifications,
        error: null
      };
    case LOAD_PRIVATE_NOTIFICATIONS_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}

export default privateNotificationReducer;