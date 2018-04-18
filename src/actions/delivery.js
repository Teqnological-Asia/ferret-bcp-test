import axios from 'axios';
import {
  LOAD_DELIVERIES_SUCCESS,
  CANCEL_DELIVERIES_SUCCESS
} from '../constants/delivery';
import { push } from 'react-router-redux';
import { getAuthHeader } from './auth';

export const loadDeliveriesSuccess = (deliveries) => {
  return {
    type: LOAD_DELIVERIES_SUCCESS,
    deliveries
  }
}

export const cancelDeliveriesSuccess = () => {
  return {
    type: CANCEL_DELIVERIES_SUCCESS
  }
}

export const loadDeliveriesRequest = (params) => {
  return dispatch => {
    const request = axios
                      .get(`/deliverys_request_show.json`, {
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      dispatch(loadDeliveriesSuccess(response.data.data.deliveries));
    });
  };
}

export const cancelDeliveriesRequest = (stock_codes) =>  {
  return dispatch => {
     const request = axios
                      .post(`${process.env.REACT_APP_BALANCE_API_HOST}/delivery/cancel`,
                        {
                          stock_codes: stock_codes
                        },
                        {
                          headers: getAuthHeader()
                        });
    return request.then((response) => {
      dispatch(push(`/account/delivery/cancel/complete`));
    })
    .catch(error => {
      dispatch(push(`/account/delivery/cancel/complete`));
    });
  };
}