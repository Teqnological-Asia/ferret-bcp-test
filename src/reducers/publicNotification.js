import { LOAD_PUBLIC_NOTIFICATIONS_SUCCESS, LOAD_PUBLIC_NOTIFICATIONS_FAILURE } from '../constants/publicNotification';

const initialState = {
  notifications: [],
  error: null
};

export const publicNotificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PUBLIC_NOTIFICATIONS_SUCCESS:
      return {
        notifications: action.notifications,
        error: null
      };
    case LOAD_PUBLIC_NOTIFICATIONS_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}

export default publicNotificationReducer;