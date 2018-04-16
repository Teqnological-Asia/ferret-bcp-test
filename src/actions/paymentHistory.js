import axios from 'axios';
import { LOAD_PAYMENT_HISTORY_SUCCESS } from '../constants/paymentHistory';
import { getAuthHeader } from './auth';

export const loadPaymentHistoriesSuccess = (paymentHistories) => {
  return {
    type: LOAD_PAYMENT_HISTORY_SUCCESS,
    paymentHistories
  }
}

export const loadPaymentHistoriesRequest = () => {
  return dispatch => {
    const request = axios.get(`${process.env.REACT_APP_BALANCE_API_HOST}/cash_transfers`, {
                           headers: getAuthHeader()
                         });

    return request.then((response) => {
      dispatch(loadPaymentHistoriesSuccess(response.data.data.cash_transfers));
    });
  }
}