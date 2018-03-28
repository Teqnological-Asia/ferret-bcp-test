import axios from 'axios';
import { LOAD_PUBLIC_NOTIFICATIONS_SUCCESS } from '../constants/publicNotification';

export const loadPublicNotificationsSuccess = (notifications, currentPage, totalPages) => {
  return {
    type: LOAD_PUBLIC_NOTIFICATIONS_SUCCESS,
    notifications,
    currentPage,
    totalPages
  }
}

export const loadPublicNotificationsRequest = (page = 1) => {
  return dispatch => {
    const params = {
      page: page,
      size: 10,
      type: 'institution'
    };
    const request = axios
                      .get('http://localhost:9999/public_notification.json', {
                        params: params
                      });

    return request
            .then((response) => {
              const data = response.data.data;
              dispatch(loadPublicNotificationsSuccess(data.informations, data.page, data.total_pages));
            });
  };
}