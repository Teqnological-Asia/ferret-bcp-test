import axios from 'axios';
import qs from 'qs';
import { getAuthHeader } from './auth';
import { setLoading } from '../actions/loading';
import {LOAD_TRADE_CASH_HISTORIES_SUCCESS} from "../constants/tradeCashHistory";

export const loadTradeCashHistoriesSuccess = (tradeCashHistories, currentPage) => {
  return {
    type: LOAD_TRADE_CASH_HISTORIES_SUCCESS,
    tradeCashHistories,
    currentPage,
  }
}

export const loadTradeCashHistoriesRequest = (params) => {
  return dispatch => {
    dispatch(setLoading(true))
    const request = axios
      .get(`${process.env.REACT_APP_TRADE_API_HOST}/user/cash/history`, {
        params: params,
        paramsSerializer: (params) => (
          qs.stringify(params, {arrayFormat: 'repeat'})
        ),
        headers: getAuthHeader()
      });

    return request.then((response) => {
      const data = response.data;
      console.log(data.items)
      dispatch(loadTradeCashHistoriesSuccess(data.items, data.count));
      dispatch(setLoading(false))
    });
  };
}