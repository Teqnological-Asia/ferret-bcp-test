import axios from 'axios';
import { LOAD_PHYSICALS_SUCCESS, LOAD_STOCK_DETAIL_SUCCESS, LOAD_PHYSICAL_DETAIL_SUCCESS } from '../constants/physical';
import { getAuthHeader } from './auth';

export const loadPhysicalsSuccess = (physicals) => {
  return {
    type: LOAD_PHYSICALS_SUCCESS,
    physicals
  }
}

export const loadPhysicalDetailSuccess = (physical) => {
  return {
    type: LOAD_PHYSICAL_DETAIL_SUCCESS,
    physicalDetail: physical
  }
}

export const loadStockDetailSuccess = (stock) => {
  return {
    type: LOAD_STOCK_DETAIL_SUCCESS,
    stockDetail: stock
  }
}

export const loadPhysicalsRequest = () => {
  return dispatch => {
    const request = axios
                      .get(`/equity_balances.json`, {
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      dispatch(loadPhysicalsSuccess(response.data.data.equity_balances));
    });
  };
}

export const loadPhysicalDetailRequest = () => {
  return dispatch => {
    const request = axios
                      .get(`/equity_balance_detail.json`, {
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      console.log(response.data.data.equity_balances[0])
      dispatch(loadPhysicalDetailSuccess(response.data.data.equity_balances[0]));
    });
  };
}

export const loadStockDetailRequest = () => {
  return dispatch => {
    const request = axios
                      .get(`/stock_detail.json`, {
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      dispatch(loadStockDetailSuccess(response.data.data));
    });
  };
}