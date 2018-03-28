import axios from 'axios';
import { LOAD_PRIVATE_NOTIFICATIONS_SUCCESS } from '../constants/privateNotification';
import { getAuthHeader } from './auth';

export const loadPrivateNotificationsSuccess = (notifications, currentPage, totalPages) => {
  return {
    type: LOAD_PRIVATE_NOTIFICATIONS_SUCCESS,
    notifications,
    currentPage,
    totalPages
  }
}

export const loadPrivateNotificationsRequest = (page=1) => {
  return dispatch => {
    const params = {
      page: page,
      size: 10,
      type: 'account'
    }
    const request = axios
                      .get('http://localhost:9999/private_notification.json', {
                        params: params,
                        headers: getAuthHeader()
                      });

    return request
            .then((response) => {
              const data = response.data.data;
              dispatch(loadPrivateNotificationsSuccess(data.informations, data.page, data.total_pages));
            });
  };
}