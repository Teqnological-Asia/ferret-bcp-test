import { LOAD_NOTIFICATION_DETAIL_SUCCESS } from '../constants/notificationDetail';

const initialState = {
  notification: null
};

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_NOTIFICATION_DETAIL_SUCCESS:
      return {
        notification: action.notification
      };
    default:
      return state;
  }
}

export default notificationReducer;