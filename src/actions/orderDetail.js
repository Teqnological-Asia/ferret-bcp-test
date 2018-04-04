import axios from 'axios';
import { LOAD_ORDER_DETAIL_SUCCESS } from '../constants/orderDetail';
import { getAuthHeader } from './auth';

export const loadOrderDetailSuccess = (order, events) =>  {
  return {
    type: LOAD_ORDER_DETAIL_SUCCESS,
    order,
    events
  }
}

export const loadOrderDetailRequest =  (id) => {
  return dispatch => {
    // const request = axios
    //                   .get('/order_detail.json', {
    //                     headers: getAuthHeader()
    //                   });
    const request = axios
                      .get(`${process.env.REACT_APP_BALANCE_API_HOST}/orders/${id}`, {
                        headers: getAuthHeader()
                      });
    return request.then((response) => {
      const data = response.data.data;
      dispatch(loadOrderDetailSuccess(data.order, data.events));
    });
  };
}
