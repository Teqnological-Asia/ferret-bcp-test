import axios from 'axios';
import {
  LOAD_MARGIN_SUCCESS,
  LOAD_STOCK_MARGIN_SUCCESS,
  CHANGE_STOCK_MARGIN_POSITION,
  CLICK_MARGIN_BUTTON,
  NEW_MARGIN_SWAP_SUCCESS
} from '../constants/margin';
import { getAuthHeader } from './auth';
import { push } from 'react-router-redux';

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

export const clickMarginButton = (buttonType, pathname) => {
  return dispatch => {
    dispatch({
      type: CLICK_MARGIN_BUTTON,
      buttonType
    })
    dispatch(push(pathname))
  }
}

export const loadMarginRequest = () => {
  const url = `${process.env.REACT_APP_BALANCE_API_HOST}/margin_balances`
  return dispatch => {
    const request = axios
                      .get(url, {
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      dispatch(loadMarginSuccess(response.data.data.positions));
    });
  };
}

export const loadStockMarginRequest = (stockId) => {
  const url = `${process.env.REACT_APP_BALANCE_API_HOST}/stocks/${stockId}/margin_balances`
  return dispatch => {
    const request = axios
                      .get(url, {
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      const stockMargin = addTradeQuantityToStockMargin(response.data.data)
      dispatch(loadStockMarginSuccess(stockMargin));
    });
  };
}

export const newMarginSwap = (stockId, side, accountType = '1') => {
  const url = `${process.env.REACT_APP_ORDER_API_HOST}/margin_orders/swap`
  return (dispatch, getState) => {
    const { positions } = getState().marginReducer.stock
    const sumQuantity = positions.reduce(sumMarginReducer, 0)
    const close_contracts = mapCloseContracts(positions)
    const body = {
      symbol: stockId,
      exchange: 'T',
      account_type: accountType,
      close_ordering: '3',
      close_contracts: close_contracts,
      side: side,
      quantity: sumQuantity.toString()
    }
    const request = axios.post(url, body, { headers: getAuthHeader() });
    return request.then((response) => {
      const marginOrder = {
        ...response.data.data,
        sum_quantity: sumQuantity
      }
      dispatch(newMarginSwapSuccess(marginOrder))
      dispatch(push(`/account/margin/${stockId}/delivery`))
    })
  }
}

export const sendMarginSwap = (stockId, side, accountType = '1') => {
  const url = `${process.env.REACT_APP_ORDER_API_HOST}/margin_orders/swap/send`
  return (dispatch, getState) => {
    const { positions } = getState().marginReducer.stock
    const { marginOrder } = getState().marginReducer
    const sumQuantity = positions.reduce(sumMarginReducer, 0)
    const close_contracts = mapCloseContracts(positions)
    const body = {
      system_order_id: marginOrder.system_order_id,
      wb5_confirm_date: marginOrder.wb5_confirm_date,
      symbol: stockId,
      exchange: 'T',
      account_type: accountType,
      close_ordering: '3',
      close_contracts: close_contracts,
      side: side,
      quantity: sumQuantity.toString()
    }
    const request = axios.post(url, body, { headers: getAuthHeader() });
    return request.then((response) => {
      const marginOrder = {
        ...response.data.data,
        sum_quantity: sumQuantity
      }
      dispatch(newMarginSwapSuccess(marginOrder))
      dispatch(push(`/account/margin/${stockId}/delivery/complete`))
    })
  }
}

const mapCloseContracts = positions => {
  const closeContracts = positions.sort((p1, p2) => p1.entry_date <= p2.entry_date)
  return closeContracts.map((position, index) => ({
    id: position.position_id,
    quantity: position.trade_quantity.toString(),
    priority: (index + 1).toString()
  }))
}

const sumMarginReducer = (accumulator, currentPosition) => accumulator + currentPosition.trade_quantity;

const addTradeQuantityToStockMargin = (stockMargin) => ({
  ...stockMargin,
  positions: stockMargin.positions.map(position => ({
    ...position,
    trade_quantity: 0,
    max_quantity: position.quantity - position.ordering_quantity
  }))
})