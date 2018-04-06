import axios from 'axios';
import { LOAD_BALANCE_SUCCESS } from '../constants/balance';
import { getAuthHeader } from './auth';

export const loadBalanceSuccess = (tradeCapacities) => {
  return {
    type: LOAD_BALANCE_SUCCESS,
    tradeCapacities
  }
}

export const loadBalanceRequest = () => {
  return dispatch => {
    const request = axios
                      .get(`${process.env.REACT_APP_BALANCE_API_HOST}/trade_capacities`, {
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      dispatch(loadBalanceSuccess(response.data.data.trade_capacities));
    });
  };
}
