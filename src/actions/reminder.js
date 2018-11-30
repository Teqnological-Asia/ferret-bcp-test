import { push } from 'react-router-redux';
import axios from 'axios';
import { setLoading } from '../actions/loading';

export const sendReminderRequest = (email) => {
  return dispatch => {
    dispatch(setLoading(true))
    const request = axios
                      .post(`${process.env.REACT_APP_AUTH_API_HOST}/passwords`, {
                        email
                      });

    return request
            .then((response) => {
              dispatch(push('/account/reminder/complete'));
              dispatch(setLoading(false))
            })
            .catch(error => {
              dispatch(setLoading(false))
            });
  };
}