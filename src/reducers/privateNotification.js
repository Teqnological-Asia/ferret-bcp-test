import { LOAD_PRIVATE_NOTIFICATIONS_SUCCESS } from '../constants/privateNotification';

const initialState = {
  notifications: [],
  currentPage: null,
  totalPages: null
};

export const privateNotificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRIVATE_NOTIFICATIONS_SUCCESS:
      return {
        notifications: state.notifications.concat(action.notifications),
        currentPage: action.currentPage,
        totalPages: action.totalPages,
      };
    default:
      return state;
  }
}

export default privateNotificationReducer;