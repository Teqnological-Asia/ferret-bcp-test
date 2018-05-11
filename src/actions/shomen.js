import axios from 'axios';
import { getAuthHeader } from './auth';

export const lbxConfirmRequest = (codes) => {
  return dispatch => {
    const request = axios
                      .post(`${process.env.REACT_APP_USER_INFORMATION_API_HOST}/lbx/confirm`,
                        {
                          code: codes
                        },
                        {
                          headers: getAuthHeader()
                        });
    return request.then((response) => {
      sessionStorage.removeItem('is_unconfirmed');
    });
  }
}
