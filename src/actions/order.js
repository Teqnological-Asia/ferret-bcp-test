import axios from 'axios';
import qs from 'qs';
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
                      .get('/orders.json', {
                        params: params,
                        paramsSerializer: (params) => (
                          qs.stringify(params, {arrayFormat: 'repeat'})
                        ),
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      const data = response.data.data;
      dispatch(loadOrdersSuccess(data.orders, data.page, data.total_pages));
    });
  };
}