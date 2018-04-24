import axios from 'axios';
import { LOAD_PUBLIC_NOTIFICATIONS_SUCCESS, CLEAR_ALL } from '../constants/publicNotification';
import { getAuthHeader } from './auth';

export const loadPublicNotificationsSuccess = (notifications, currentPage, totalPages) => {
  return {
    type: LOAD_PUBLIC_NOTIFICATIONS_SUCCESS,
    notifications,
    currentPage,
    totalPages
  }
}

export const clearPublicNotifications = () => {
  return {
    type: CLEAR_ALL
  }
}

export const loadPublicNotificationsRequest = (page = 1) => {
  return dispatch => {
    const params = {
      page: page,
      type: 'institution',
      size: 5
    };
    const request = axios
                      .get(`${process.env.REACT_APP_USER_INFORMATION_API_HOST}/informations`, {
                        params: params,
                        headers: getAuthHeader()
                      });

    return request
            .then((response) => {
              const data = response.data.data;
              dispatch(loadPublicNotificationsSuccess(data.informations, data.page, data.total_pages));
            });
  };
}