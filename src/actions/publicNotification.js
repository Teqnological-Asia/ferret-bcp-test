import axios from 'axios';
import { LOAD_PUBLIC_NOTIFICATIONS_SUCCESS, LOAD_PUBLIC_NOTIFICATIONS_FAILURE } from '../constants/publicNotification';

export const loadPublicNotificationsSuccess = (notifications) => {
  return {
    type: LOAD_PUBLIC_NOTIFICATIONS_SUCCESS,
    notifications
  }
}

export const loadPublicNotificationsFailure = (error) => {
  return {
    type: LOAD_PUBLIC_NOTIFICATIONS_FAILURE,
    error
  }
}

export const loadPublicNotificationsRequest = (params) => {
  return dispatch => {
    const request = axios
                      .get('http://localhost:9999/public_notification.json', {
                      });

    return request
            .then((response) => {
              const notifications = response.data.data.informations;
              dispatch(loadPublicNotificationsSuccess(notifications));
            })
            .catch(error => {
              let errorMessage = '';
              if (error.response) {
                errorMessage = error.response.data.message;
              }
              dispatch(loadPublicNotificationsFailure(errorMessage));
            });
  };
}