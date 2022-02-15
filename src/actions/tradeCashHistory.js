import axios from 'axios';
import { getAuthHeader } from './auth';
import { setLoading } from '../actions/loading';
import {LOAD_TRADE_CASH_HISTORIES_SUCCESS} from "../constants/tradeCashHistory";

export const loadTradeCashHistoriesSuccess = (tradeCashHistories, currentPage, totalPages) => {
  return {
    type: LOAD_TRADE_CASH_HISTORIES_SUCCESS,
    tradeCashHistories,
    currentPage,
    totalPages
  }
}

export const loadTradeCashHistoriesRequest = (params) => {
  return dispatch => {
    dispatch(setLoading(true))
    const request = axios
      .post(`${process.env.REACT_APP_TRADE_API_HOST}/user/cash/search`,
        params,
        {headers: getAuthHeader()}
      );
    return request.then((response) => {
      const data = response.data;
      dispatch(loadTradeCashHistoriesSuccess(data.items, data.page,data.totalPages));
      dispatch(setLoading(false))
    });
  };
}