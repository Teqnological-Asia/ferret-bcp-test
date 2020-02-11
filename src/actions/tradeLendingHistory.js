import axios from 'axios';
import qs from 'qs';
import { LOAD_TRADE_LENDING_HISTORIES_SUCCESS } from '../constants/tradeLendingHistory';
import { getAuthHeader } from './auth';
import { setLoading } from '../actions/loading';

export const loadTradeLendingHistoriesSuccess = (tradeLendingHistories, currentPage, totalPages) => {
  return {
    type: LOAD_TRADE_LENDING_HISTORIES_SUCCESS,
    tradeLendingHistories,
    currentPage,
    totalPages
  }
}

export const loadTradeLendingHistoriesRequest = (params) => {
  return dispatch => {
    dispatch(setLoading(true))
    const request = axios
                      .get(`${process.env.REACT_APP_STOCK_LENDING_API_HOST}/v1/productLendingTrades`, {
                        params: params,
                        paramsSerializer: (params) => (
                          qs.stringify(params, {arrayFormat: 'repeat'})
                        ),
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      const data = response.data.data;
      dispatch(loadTradeLendingHistoriesSuccess(data.trades, data.page, data.total_pages));
      dispatch(setLoading(false))
    });
  };
}