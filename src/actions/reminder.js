import { push } from 'react-router-redux';
import { SEND_REMINDER_SUCCESS, SEND_REMINDER_FAILURE } from '../constants/reminder';

export const sendReminderSuccess = () => {
  return {
    type: SEND_REMINDER_SUCCESS
  }
}

export const sendReminderFailure = (error) => {
  return {
    type: SEND_REMINDER_FAILURE,
    error
  }
}

export const sendReminderRequest = (email) => {
  return dispatch => {
    dispatch(push('/account/reminder/complete'));
  };
}