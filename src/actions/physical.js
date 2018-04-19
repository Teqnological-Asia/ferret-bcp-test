import axios from 'axios';
import { push } from 'react-router-redux';
import {
  LOAD_PHYSICALS_SUCCESS,
  LOAD_STOCK_DETAIL_SUCCESS,
  LOAD_PHYSICAL_DETAIL_SUCCESS,
  SAVE_ORDER_FORM,
  CREATE_ORDER_SUCCESS,
  SAVE_ORDER_SEND_PARAMS
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

export const saveOrderSendParams = (orderSendParams) => {
  return {
    type: SAVE_ORDER_SEND_PARAMS,
    orderSendParams
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
  return (dispatch, getState) => {
    const physicalDetail = getState().physicalReducer.physicalDetail;
    const orderNewParams = {
      symbol: physicalDetail.stock_code,
      exchange: 'T',
      side: 'Sell',
      account_type: accountTypes[physicalDetail.account_type],
      order_type: params.orderType,
      execution_type: 'None',
      quantity: String(params.quantity),
      expiration_type: 'DAY',
      order_condition_type: 'None'
    };

    if (orderNewParams['order_type'] === 'Limit') {
      orderNewParams['price'] = String(params.price);
    }

    const request = axios
                      .post(
                        `${process.env.REACT_APP_ORDER_API_HOST}/orders`,
                        orderNewParams,
                        {
                          headers: getAuthHeader(),
                        }
                      );

    return request.then((response) => {
      const data = response.data.data;
      const orderNewResponse = {
        system_order_id: data.system_order_id,
        wb5_confirmed_date: data.wb5_confirmed_date,
        wb5_confirmed_price: data.wb5_confirmed_price
      };

      dispatch(saveOrderForm(params));
      dispatch(saveOrderSendParams({...orderNewParams, ...orderNewResponse}));
      dispatch(push(`/account/physical/${id}/order/confirm`));
    });
  }
}

export const accountTypes = {
  'general': '0',
  'specific': '1',
  'exemptive': '6'
};

export const createOrderRequest = (id) => {
  return (dispatch, getState) => {
    const params = getState().physicalReducer.orderSendParams;
    const request = axios
                      .post(
                        `${process.env.REACT_APP_ORDER_API_HOST}/orders/send`,
                        params,
                        {
                          headers: getAuthHeader(),
                        }
                      );

    return request.then((response) => {
      dispatch(push(`/account/physical/${id}/order/complete`));
    });
  }
}