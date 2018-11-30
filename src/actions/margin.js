import axios from 'axios';
import {
  LOAD_MARGIN_SUCCESS,
  LOAD_STOCK_MARGIN_SUCCESS,
  CHANGE_STOCK_MARGIN_POSITION,
  CLICK_MARGIN_BUTTON,
  NEW_MARGIN_SWAP_SUCCESS,
  CHANGE_MARGIN_ORDER_FORM,
  SAVE_MARGIN_ORDER_SEND_PARAMS,
  LOAD_ACCOUNT_TYPE_SUCCESS
} from '../constants/margin';
import { getAuthHeader } from './auth';
import { push } from 'react-router-redux';
import { sumMarginReducer } from '../utils';
import { setLoading } from '../actions/loading';

export const loadMarginSuccess = (marginPositions) => {
  return {
    type: LOAD_MARGIN_SUCCESS,
    marginPositions
  }
}

export const loadStockMarginSuccess = (stockMargin) => {
  return {
    type: LOAD_STOCK_MARGIN_SUCCESS,
    stockMargin
  }
}

export const changeStockMarginPosition = (newPosition) => {
  return {
    type: CHANGE_STOCK_MARGIN_POSITION,
    newPosition
  }
}

export const newMarginSwapSuccess = (marginOrder) => {
  return {
    type: NEW_MARGIN_SWAP_SUCCESS,
    marginOrder
  }
}

export const changeMarginOrderForm = (orderForm) => {
  return {
    type: CHANGE_MARGIN_ORDER_FORM,
    orderForm
  }
}

export const saveMarginOrderSendParam = (orderSendParams) => {
  return {
    type: SAVE_MARGIN_ORDER_SEND_PARAMS,
    orderSendParams
  }
}

export const loadAccountTypeSuccess = (isGeneral) => {
  return {
    type: LOAD_ACCOUNT_TYPE_SUCCESS
  }
}

export const initMarginOrderForm = () => {
  return (dispatch, getState) => {
    const { positions } = getState().marginReducer.stock
    const sumQuantity = positions.reduce(sumMarginReducer, 0)
    dispatch(changeMarginOrderForm({
      quantity: sumQuantity
    }))
  }
}

export const clickMarginButton = (buttonType, pathname) => {
  return dispatch => {
    dispatch({
      type: CLICK_MARGIN_BUTTON,
      buttonType
    })
    dispatch(push(pathname))
  }
}

export const loadAccountType = (code) => {
  const url = `${process.env.REACT_APP_BALANCE_API_HOST}/equity_balances?code=${code}`
  return dispatch => {
    dispatch(setLoading(true))
    const request = axios
                      .get(url, {
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      const equityBalances = response.data.data.equity_balances
      const accountTypes = equityBalances.map(e => e.account_type)
      const isGeneral = accountTypes.includes('general')
      dispatch(loadAccountTypeSuccess(isGeneral));
      dispatch(setLoading(false))
    });
  };
}

export const loadMarginRequest = () => {
  const url = `${process.env.REACT_APP_BALANCE_API_HOST}/margin_balances`
  const params = {
    sort_key: 'code',
    sort_type: 'asc'
  }
  return dispatch => {
    dispatch(setLoading(true))
    const request = axios.get(url, {
      params: params,
      headers: getAuthHeader()
    });

    return request.then((response) => {
      dispatch(loadMarginSuccess(response.data.data.positions));
      dispatch(setLoading(false))
    });
  };
}

export const loadStockMarginRequest = (stockId, side) => {
  const url = `${process.env.REACT_APP_BALANCE_API_HOST}/stocks/${stockId}/margin_balances`
  const params = {
    side
  }
  return dispatch => {
    dispatch(setLoading(true))
    dispatch(changeMarginOrderForm({
      quantity: 0,
      price: null,
      orderType: null
    }))
    const request = axios
                      .get(url, {
                        params: params,
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      const stockMargin = addTradeQuantityToStockMargin(response.data.data)
      dispatch(loadStockMarginSuccess(stockMargin));
      dispatch(setLoading(false))
    });
  };
}

export const newMarginSwap = (stockId, side, accountType = '1') => {
  const url = `${process.env.REACT_APP_ORDER_API_HOST}/margin_orders/swap`
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    const { positions } = getState().marginReducer.stock
    const sumQuantity = positions.reduce(sumMarginReducer, 0)
    const close_contracts = mapCloseContracts(positions)
    const redirectUrl = side === 'sell' ? 'receipt' : 'delivery'
    const body = {
      symbol: stockId,
      exchange: 'T',
      account_type: accountType,
      close_ordering: '3',
      close_contracts: close_contracts,
      side: side === 'sell' ? 'buy' : 'sell',
      quantity: sumQuantity.toString()
    }
    const request = axios.post(url, body, { headers: getAuthHeader() });
    return request.then((response) => {
      const marginOrder = {
        ...response.data.data,
        sum_quantity: sumQuantity
      }
      dispatch(newMarginSwapSuccess(marginOrder))
      dispatch(push(`/account/margin/${stockId}/${redirectUrl}`))
      dispatch(setLoading(false))
    })
  }
}

export const sendMarginSwap = (stockId, side) => {
  const url = `${process.env.REACT_APP_ORDER_API_HOST}/margin_orders/swap/send`
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    const { positions } = getState().marginReducer.stock
    const { marginOrder } = getState().marginReducer
    const sumQuantity = positions.reduce(sumMarginReducer, 0)
    const close_contracts = mapCloseContracts(positions)
    const redirectUrl = side === 'sell' ? 'receipt' : 'delivery'
    const body = {
      system_order_id: marginOrder.system_order_id,
      wb5_confirm_date: marginOrder.wb5_confirm_date,
      symbol: stockId,
      exchange: 'T',
      account_type: marginOrder.account_type,
      close_ordering: '3',
      close_contracts: close_contracts,
      side: side === 'sell' ? 'buy' : 'sell',
      quantity: sumQuantity.toString()
    }
    const request = axios.post(url, body, { headers: getAuthHeader() });
    return request.then((response) => {
      const newMarginOrder = {
        ...marginOrder,
        ...response.data.data,
        sum_quantity: sumQuantity
      }
      dispatch(newMarginSwapSuccess(newMarginOrder))
      dispatch(push(`/account/margin/${stockId}/${redirectUrl}/complete`))
      dispatch(setLoading(false))
    })
  }
}

export const newMarginOrder = (id, side, params) => {
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    const url = `${process.env.REACT_APP_ORDER_API_HOST}/margin_orders/close`
    const { positions } = getState().marginReducer.stock
    const close_contracts = mapCloseContracts(positions)
    const orderNewParams = {
      symbol: id,
      exchange: 'T',
      account_type: accountTypes[positions[0].account_type],
      close_ordering: '3',
      close_contracts: close_contracts,
      side: side === 'sell' ? 'buy' : 'sell',
      order_type: params.orderType,
      execution_type: 'none',
      quantity: String(params.quantity),
      expiration_type: 'day',
      order_condition_type: 'none'
    };

    if (orderNewParams['order_type'] === 'Limit') {
      orderNewParams['price'] = String(params.price);
    }

    const request = axios.post(url, orderNewParams, {
      headers: getAuthHeader(),
    });

    return request.then((response) => {
      const data = response.data.data;
      const orderNewResponse = {
        system_order_id: data.system_order_id,
        wb5_confirmed_date: data.wb5_confirmed_date,
        wb5_confirmed_price: data.wb5_confirmed_price
      };

      dispatch(changeMarginOrderForm(params));
      dispatch(saveMarginOrderSendParam({...orderNewParams, ...orderNewResponse}));
      dispatch(push(`/account/margin/${id}/order/confirm`));
      dispatch(setLoading(false))
    });
  }
}

export const sendMarginOrder = (id) => {
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    const url = `${process.env.REACT_APP_ORDER_API_HOST}/margin_orders/close/send`
    const { marginOrderSendParams } = getState().marginReducer
    const request = axios.post(url, marginOrderSendParams, {
      headers: getAuthHeader(),
    });
    return request.then((response) => {
      dispatch(changeMarginOrderForm(null));
      dispatch(push(`/account/margin/${id}/order/complete`));
      dispatch(setLoading(false))
    });
  }
}

export const accountTypes = {
  'general': '0',
  'specific': '1',
  'exemptive': '6'
};

const mapCloseContracts = positions => {
  const closeContracts = positions.sort((p1, p2) => p1.entry_date <= p2.entry_date)
  return closeContracts.map((position, index) => ({
    id: position.position_id,
    quantity: position.trade_quantity.toString(),
    priority: (index + 1).toString()
  }))
}

const addTradeQuantityToStockMargin = (stockMargin) => ({
  ...stockMargin,
  positions: stockMargin.positions.map(position => ({
    ...position,
    trade_quantity: 0,
    max_quantity: position.quantity - position.ordering_quantity
  }))
})