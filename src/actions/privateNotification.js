import axios from 'axios';
import { LOAD_PRIVATE_NOTIFICATIONS_SUCCESS, LOAD_PRIVATE_NOTIFICATIONS_FAILURE } from '../constants/privateNotification';

export const loadPrivateNotificationsSuccess = (notifications) => {
  return {
    type: LOAD_PRIVATE_NOTIFICATIONS_SUCCESS,
    notifications
  }
}

export const loadPrivateNotificationsFailure = (error) => {
  return {
    type: LOAD_PRIVATE_NOTIFICATIONS_FAILURE,
    error
  }
}

export const loadPrivateNotificationsRequest = (params) => {
  return dispatch => {
    const request = axios
                      .get('http://localhost:9999/private_notification.json', {
                      });

    return request
            .then((response) => {
              const notifications = response.data.data.informations;
              dispatch(loadPrivateNotificationsSuccess(notifications));
            })
            .catch(error => {
              let errorMessage = '';
              if (error.response) {
                errorMessage = error.response.data.message;
              }
              dispatch(loadPrivateNotificationsFailure(errorMessage));
            });
  };
}