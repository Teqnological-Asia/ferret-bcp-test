import axios from 'axios';
import { push } from 'react-router-redux';
import { LOAD_PHYSICALS_SUCCESS, LOAD_STOCK_DETAIL_SUCCESS, LOAD_PHYSICAL_DETAIL_SUCCESS, SAVE_ORDER_FORM } from '../constants/physical';
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

export const saveOrderForm = (orderFormValues) => {
  return {
    type: SAVE_ORDER_FORM,
    orderFormValues
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

export const saveOrderFormRequest = (id, params) => {
  return dispatch => {
    dispatch(saveOrderForm(params));
    dispatch(push(`/account/physical/${id}/order/confirm`));
  }
}

export const createOrderRequest = (id) => {
  return dispatch => {
    dispatch(push(`/account/physical/${id}/order/complete`));
  }
}