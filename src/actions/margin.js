import axios from 'axios';
import {
  LOAD_MARGIN_SUCCESS,
  LOAD_STOCK_MARGIN_SUCCESS,
  CHANGE_STOCK_MARGIN_POSITION,
  CLICK_MARGIN_BUTTON
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

const addTradeQuantityToStockMargin = (stockMargin) => ({
  ...stockMargin,
  positions: stockMargin.positions.map(position => ({
    ...position,
    trade_quantity: 0,
    max_quantity: position.quantity - position.ordering_quantity
  }))
})