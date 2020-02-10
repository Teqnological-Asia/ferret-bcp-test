import axios from 'axios';
import qs from 'qs';
import { LOAD_TRADE_LENDING_BALANCE_SUCCESS } from '../constants/tradeLendingBalance';
import { getAuthHeader } from './auth';
import { setLoading } from '../actions/loading';

export const loadTradeLendingBalanceSuccess = (tradeLendingBalance) => {
  return {
    type: LOAD_TRADE_LENDING_BALANCE_SUCCESS,
    tradeLendingBalance,
  }
}

export const loadTradeLendingBalanceRequest = (params) => {
  return dispatch => {
    dispatch(setLoading(true))
    const request = axios
                      .get(`${process.env.REACT_APP_STOCK_LENDING_API_HOST}/v1/productLendingBalances`, {
                        params: params,
                        paramsSerializer: (params) => (
                          qs.stringify(params, {arrayFormat: 'repeat'})
                        ),
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      const data = response.data.data;
      dispatch(loadTradeLendingBalanceSuccess(data.trades));
      dispatch(setLoading(false))
    });
  };
}