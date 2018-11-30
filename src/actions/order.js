import axios from 'axios';
import { push } from 'react-router-redux';
import { tradeTypeCancelPath } from '../components/Order/common';
import { LOAD_ORDERS_SUCCESS } from '../constants/order';
import { getAuthHeader } from './auth';
import { setLoading } from '../actions/loading';

export const loadOrdersSuccess = (orders, currentPage, totalPages) => {
  return {
    type: LOAD_ORDERS_SUCCESS,
    orders,
    currentPage,
    totalPages
  }
}

export const loadOrdersRequest = (params) => {
  return dispatch => {
    dispatch(setLoading(true))
    const request = axios
                      .get(`${process.env.REACT_APP_BALANCE_API_HOST}/orders`, {
                        params: params,
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      const data = response.data.data;
      dispatch(loadOrdersSuccess(data.orders, data.page, data.total_pages));
      dispatch(setLoading(false))
    });
  };
}

export const cancelOrderRequest = (id, type) => {
  const path = tradeTypeCancelPath[type]
  const baseUrl = `${process.env.REACT_APP_ORDER_API_HOST}/${path}`
  const headers = {
    headers: getAuthHeader()
  }
  return dispatch => {
    dispatch(setLoading(true))
    const cancelNewRequest = axios.post(
      `${baseUrl}/${id}/cancel`,
      {},
      headers
    );

    return cancelNewRequest.then((response) => {
      const data = response.data.data;
      const body = {
        wb5_confirmed_at: data.wb5_confirmed_date,
        system_order_id: data.system_order_id
      }
      const cancelSendRequest = axios.post(
        `${baseUrl}/${id}/cancel/send`,
        body,
        headers
      );

      return cancelSendRequest.then((response) => {
        dispatch(push(`/account/order/${id}/cancel/complete`));
        dispatch(setLoading(false))
      });
    });
  };
}