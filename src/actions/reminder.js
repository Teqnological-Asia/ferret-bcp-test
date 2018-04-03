import { push } from 'react-router-redux';
import axios from 'axios';

export const sendReminderRequest = (email) => {
  return dispatch => {
    const request = axios
                      .post(`${process.env.REACT_APP_AUTH_API_HOST}/passwords`, {
                        email
                      });

    return request
            .then((response) => {
              dispatch(push('/account/reminder/complete'));
            })
            .catch(error => {
            });
  };
}