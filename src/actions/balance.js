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
    const request = axios.get('/trade_capacities.json', {
      headers: getAuthHeader()
    });

    return request.then((response) => {
      dispatch(loadBalanceSuccess(response.data.trade_capacities));
    });
  };
}
