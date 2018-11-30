import axios from 'axios';
import { LOAD_PRIVATE_NOTIFICATIONS_SUCCESS, CLEAR_ALL } from '../constants/privateNotification';
import { getAuthHeader } from './auth';
import { setLoading } from '../actions/loading';

export const loadPrivateNotificationsSuccess = (notifications, currentPage, totalPages) => {
  return {
    type: LOAD_PRIVATE_NOTIFICATIONS_SUCCESS,
    notifications,
    currentPage,
    totalPages
  }
}

export const clearPrivateNotifications = () => {
  return {
    type: CLEAR_ALL
  }
}

export const loadPrivateNotificationsRequest = (page=1) => {
  return dispatch => {
    dispatch(setLoading(true))
    const params = {
      page: page,
      type: 'account',
      size: 5
    }
    const request = axios
                      .get(`${process.env.REACT_APP_USER_INFORMATION_API_HOST}/informations`, {
                        params: params,
                        headers: getAuthHeader()
                      });

    return request
            .then((response) => {
              const data = response.data.data;
              dispatch(loadPrivateNotificationsSuccess(data.informations, data.page, data.total_pages));
              dispatch(setLoading(false))
            });
  };
}