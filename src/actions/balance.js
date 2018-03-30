import axios from 'axios';
import qs from 'qs';
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
    // const request = axios
    //                   .get(`${process.env.REACT_APP_BALANCE_API_HOST}/trade_capacities`, {
    //                     headers: getAuthHeader()
    //                   });
    const request = axios.get('http://localhost:3000/test.json');

    return request.then((response) => {
      dispatch(loadBalanceSuccess(response.data.trade_capacities));
    });
  };
}
