import axios from 'axios';
import {
  LOAD_DELIVERIES_SUCCESS,
  CANCEL_DELIVERIES_SUCCESS,
  LOAD_DELIVERIES_INDEX_SUCCESS
} from '../constants/delivery';
import { push } from 'react-router-redux';
import { getAuthHeader } from './auth';
import { setLoading } from '../actions/loading';

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

export const loadDeliveriesIndexSuccess = (deliveries) => {
  return {
    type: LOAD_DELIVERIES_INDEX_SUCCESS,
    deliveries
  }
}

export const loadDeliveriesRequest = () => {
  return dispatch => {
    dispatch(setLoading(true))
    const request = axios
                      .get(`${process.env.REACT_APP_BALANCE_API_HOST}/delivery/requests`,
                      {
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      dispatch(loadDeliveriesSuccess(response.data.data));
      dispatch(setLoading(false))
    });
  };
}

export const cancelDeliveriesRequest = (stock_codes) =>  {
  return dispatch => {
    dispatch(setLoading(true))
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
      dispatch(setLoading(false))
    })
  };
}

export const loadDeliveriesIndexRequest = () => {
  return dispatch => {
    dispatch(setLoading(true))
    const request = axios
                      .get(`${process.env.REACT_APP_BALANCE_API_HOST}/delivery`,
                      {
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      dispatch(loadDeliveriesIndexSuccess(response.data.data));
      dispatch(setLoading(false))
    });
  };
}

export const submitdeliveriesRequest = (params) => {
  return dispatch => {
    dispatch(setLoading(true))
    const request = axios
                      .post(`${process.env.REACT_APP_BALANCE_API_HOST}/delivery`,
                      params,
                      {
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      dispatch(push(`/account/delivery/complete`));
      dispatch(setLoading(false))
    });
  };
}
