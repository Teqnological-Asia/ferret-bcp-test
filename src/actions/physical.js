import axios from 'axios';
import { push } from 'react-router-redux';
import {
  LOAD_PHYSICALS_SUCCESS,
  LOAD_STOCK_DETAIL_SUCCESS,
  LOAD_PHYSICAL_DETAIL_SUCCESS,
  SAVE_ORDER_FORM,
  CREATE_ORDER_SUCCESS
} from '../constants/physical';
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

export const createOrderSuccess = () => {
  return {
    type: CREATE_ORDER_SUCCESS
  }
}

export const loadPhysicalsRequest = () => {
  return dispatch => {
    const request = axios
                      .get(`${process.env.REACT_APP_BALANCE_API_HOST}/equity_balances`, {
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      dispatch(loadPhysicalsSuccess(response.data.data.equity_balances));
    });
  };
}

export const loadPhysicalDetailRequest = (stockCode) => {
  return dispatch => {
    const params = {code: stockCode};
    const request = axios
                      .get(`${process.env.REACT_APP_BALANCE_API_HOST}/equity_balances`, {
                        params: params,
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      dispatch(loadPhysicalDetailSuccess(response.data.data.equity_balances[0]));
    });
  };
}

export const loadStockDetailRequest = (stockCode) => {
  return dispatch => {
    const request = axios
                      .get(`${process.env.REACT_APP_BALANCE_API_HOST}/stocks/${stockCode}`, {
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

export const accountTypes = {
  'general': '0',
  'specific': '1',
  'exemptive': '6'
};

export const createOrderRequest = (id) => {
  return (dispatch, getState) => {
    const physicalDetail = getState().physicalReducer.physicalDetail;
    const orderFormValues = getState().physicalReducer.orderFormValues;
    const orderNewParams = {
      symbol: physicalDetail.stock_code,
      exchange: 'T',
      side: 'Sell',
      account_type: accountTypes[physicalDetail.account_type],
      order_type: orderFormValues.orderType,
      execution_type: 'None',
      quantity: String(orderFormValues.quantity),
      expiration_type: 'DAY',
      order_condition_type: 'None'
    };

    if (orderNewParams['order_type'] === 'Limit') {
      orderNewParams['price'] = String(orderFormValues.price);
    }

    const orderNewRequest = axios
                              .post(
                                `${process.env.REACT_APP_ORDER_API_HOST}/orders`,
                                orderNewParams,
                                {
                                  headers: getAuthHeader(),
                                }
                              );

    return orderNewRequest.then((response) => {
      const data = response.data.data;
      const params = {
        system_order_id: data.system_order_id,
        wb5_confirmed_date: data.wb5_confirmed_date,
        wb5_confirmed_price: data.wb5_confirmed_price
      };

      const orderSendParams = {...orderNewParams, ...params};
      const orderSendRequest = axios
                                .post(
                                  `${process.env.REACT_APP_ORDER_API_HOST}/orders/send`,
                                  orderSendParams,
                                  {
                                    headers: getAuthHeader(),
                                  }
                                );
      return orderSendRequest.then((response) => {
        dispatch(push(`/account/physical/${id}/order/complete`));
      });
    });
  }
}
