import axios from 'axios';
import { LOAD_IFRAME_URL_SUCCESS } from '../constants/report';
import { getAuthHeader } from './auth';

export const loadIframeUrlSuccess = (url) => {
  return {
    type: LOAD_IFRAME_URL_SUCCESS,
    url
  }
}

export const loadIframeUrlRequest = () => {
  return dispatch => {
    const request = axios
                      .get(`${process.env.REACT_APP_BALANCE_API_HOST}/trades_report`, {
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      dispatch(loadIframeUrlSuccess(response.data.data.frame_url));
    });
  }
}