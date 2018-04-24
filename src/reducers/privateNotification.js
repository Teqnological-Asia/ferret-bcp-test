import { LOAD_PRIVATE_NOTIFICATIONS_SUCCESS, CLEAR_ALL } from '../constants/privateNotification';

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
    case CLEAR_ALL:
      return initialState;
    default:
      return state;
  }
}

export default privateNotificationReducer;