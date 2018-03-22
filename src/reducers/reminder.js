import { SEND_REMINDER_SUCCESS, SEND_REMINDER_FAILURE } from '../constants/reminder';

const initialState = {
  error: null
};

export const reminderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_REMINDER_SUCCESS:
      return {
        error: null
      };
    case SEND_REMINDER_FAILURE:
      return {
        error: action.error
      }
    default:
      return state;
  }
}

export default reminderReducer;