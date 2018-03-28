import axios from 'axios';
import { LOAD_NOTIFICATION_DETAIL_SUCCESS } from '../constants/notificationDetail';
import { createModal } from '../actions/modal';
import { getAuthHeader } from './auth';

export const loadNotificationDetailSuccess = (notification) => {
  return {
    type: LOAD_NOTIFICATION_DETAIL_SUCCESS,
    notification
  }
}

export const loadNotificationDetailRequest = (id) => {
  return dispatch => {
    const request = axios
                      .get(`${process.env.REACT_APP_USER_INFORMATION_API_HOST}/informations/${id}`, {
                        headers: getAuthHeader()
                      });

    return request
            .then((response) => {
              const notification = response.data.data;
              dispatch(loadNotificationDetailSuccess(notification));
              dispatch(createModal(notification));
            });
  };
}