import { push } from 'react-router-redux';
import axios from 'axios';

export const sendReminderRequest = (email) => {
  return dispatch => {
    dispatch(push('/account/reminder/complete'));
    // const request = axios
    //                   .post(`${process.env.REACT_APP_AUTH_API_HOST}/passwords`, {
    //                     email
    //                   });

    // return request
    //         .then((response) => {
    //           console.log(response)
    //         })
    //         .catch(error => {
    //         });
  };
}