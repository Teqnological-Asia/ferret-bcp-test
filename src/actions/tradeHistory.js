import axios from 'axios';
import qs from 'qs';
import { LOAD_TRADE_HISTORIES_SUCCESS } from '../constants/tradeHistory';
import { getAuthHeader } from './auth';

export const loadTradeHistoriesSuccess = (tradeHistories, currentPage, totalPages) => {
  return {
    type: LOAD_TRADE_HISTORIES_SUCCESS,
    tradeHistories,
    currentPage,
    totalPages
  }
}

export const loadTradeHistoriesRequest = (params) => {
  return dispatch => {
    const request = axios
                      .get(`${process.env.REACT_APP_BALANCE_API_HOST}/trades`, {
                        params: params,
                        paramsSerializer: (params) => (
                          qs.stringify(params, {arrayFormat: 'repeat'})
                        ),
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      const data = response.data.data;
      dispatch(loadTradeHistoriesSuccess(data.trades, params.page, 100));
    });
  };
}