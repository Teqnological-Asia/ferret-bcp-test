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
                      .get('http://localhost:9999/notification_detail.json', {
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