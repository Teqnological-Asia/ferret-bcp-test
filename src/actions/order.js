import axios from 'axios';
import { push } from 'react-router-redux';
import { LOAD_ORDERS_SUCCESS } from '../constants/order';
import { getAuthHeader } from './auth';

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
    const request = axios
                      .get(`${process.env.REACT_APP_BALANCE_API_HOST}/orders`, {
                        params: params,
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      const data = response.data.data;
      dispatch(loadOrdersSuccess(data.orders, data.page, data.total_pages));
    });
  };
}

export const cancelOrderRequest = (id) => {
  return dispatch => {
    const cancelNewRequest = axios
                              .post(`${process.env.REACT_APP_ORDER_API_HOST}/orders/${id}/cancel`, {}, {
                                headers: getAuthHeader()
                              });

    return cancelNewRequest.then((response) => {
      const wb5ConfirmedAt = response.data.data.wb5_confirmed_at;
      const cancelSendRequest = axios
                                .post(
                                  `${process.env.REACT_APP_ORDER_API_HOST}/orders/${id}/cancel/send`,
                                  {
                                    wb5_confirmed_at: wb5ConfirmedAt
                                  },
                                  {
                                    headers: getAuthHeader()
                                  }
                                );
      return cancelSendRequest.then((response) => {
        dispatch(push(`/account/order/${id}/cancel/complete`));
      });
    });
  };
}