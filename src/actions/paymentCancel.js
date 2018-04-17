import axios from 'axios';
import { push } from 'react-router-redux';
import { LOAD_PAYMENT_CANCEL_LIST_SUCCESS, CANCEL_PAYMENT_SUCCESS } from '../constants/paymentCancel';
import { getAuthHeader } from './auth';

export const loadPaymentCancelListSuccess = (payments) => {
  return {
    type: LOAD_PAYMENT_CANCEL_LIST_SUCCESS,
    payments
  }
}

export const cancelPaymentSuccess = () => {
  return {
    type: CANCEL_PAYMENT_SUCCESS
  }
}

export const loadPaymentCancelListRequest = () => {
  return dispatch => {
    const request = axios.get(`${process.env.REACT_APP_BALANCE_API_HOST}/cashouts`, {
                           headers: getAuthHeader()
                         });

    return request.then((response) => {
      dispatch(loadPaymentCancelListSuccess(response.data.data.cashouts));
    });
  }
}

export const cancelCashTransferRequest = (id) => {
  return dispatch => {
    const request = axios
                      .post(`${process.env.REACT_APP_BALANCE_API_HOST}/cashouts/${id}/cancel/complete`, {}, {
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      dispatch(cancelPaymentSuccess());
      dispatch(push(`/account/payment/${id}/cancel/complete`));
    });
  }
}