import { LOAD_PUBLIC_NOTIFICATIONS_SUCCESS, CLEAR_ALL } from '../constants/publicNotification';

const initialState = {
  notifications: [],
  currentPage: null,
  totalPages: null
};

export const publicNotificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PUBLIC_NOTIFICATIONS_SUCCESS:
      return {
        notifications: state.notifications.concat(action.notifications),
        currentPage: action.currentPage,
        totalPages: action.totalPages,
      };
    case CLEAR_ALL:
      return initialState;
    default:
      return state;
  }
}

export default publicNotificationReducer;