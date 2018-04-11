import axios from 'axios';
import { push } from 'react-router-redux';
import { LOAD_CASH_TRANSFER_SUCCESS, LOAD_CASH_WITHDRAWAL_SUCCESS } from '../constants/payment';
import { getAuthHeader } from './auth';

export const loadCashTransferSuccess = (cashTransfer) => {
  return {
    type: LOAD_CASH_TRANSFER_SUCCESS,
    cashTransfer
  }
}

export const loadCashWithdrawalSuccess = (cashWithdrawal) => {
  return {
    type: LOAD_CASH_WITHDRAWAL_SUCCESS,
    cashWithdrawal
  }
}

export const loadCashTransferRequest = () => {
  return dispatch => {
    const request = axios
                      .get(`${process.env.REACT_APP_BALANCE_API_HOST}/deposit_info`, {
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      dispatch(loadCashTransferSuccess(response.data.data));
    });
  };
}

export const loadCashWithdrawalRequest = () => {
  return dispatch => {
    const request = axios
                      .get(`${process.env.REACT_APP_BALANCE_API_HOST}/cashout_info`, {
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      dispatch(loadCashWithdrawalSuccess(response.data.data));
    });
  };
}