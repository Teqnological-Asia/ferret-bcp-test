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

    // return request.then((response) => {
    //   const data = response.data.data;
    //   dispatch(loadBalanceSuccess(data.trade_capacities));
    // });
    var text_data = '{"trade_capacities": [' +
    '{"date": "20050301", "equity_trading_power": 11000, "withdrawable": 16000,"equity_applicable_date": "20050301", },' +
    '{"date": "20050302", "equity_trading_power": 21000, "withdrawable": 26000, "equity_applicable_date": "20050302"},]}';
    const data = JSON.parse(text_data);
    return dispatch(loadBalanceSuccess(data.trade_capacities));
  };
}
