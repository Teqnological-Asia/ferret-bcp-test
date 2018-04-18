import axios from 'axios';
import { push } from 'react-router-redux';
import {
  LOAD_FRACTIONALS_SUCCESS,
  BUY_SELL_FRACTIONALS_SUCCESS,
  LOAD_FRACTIONALS_SHOW_SUCCESS,
  CANCEL_FRACTIONALS_SUCCESS
} from '../constants/fractional';
import { getAuthHeader } from './auth';

export const loadFractionalsSuccess = (fractionals) => {
  return {
    type: LOAD_FRACTIONALS_SUCCESS,
    fractionals
  }
}

export const loadFractionalsShowSuccess = (fractionals) => {
  return {
    type: LOAD_FRACTIONALS_SHOW_SUCCESS,
    fractionals
  }
}

export const buySellFractionalSuccess = () => {
  return {
    type: BUY_SELL_FRACTIONALS_SUCCESS
  }
}

export const cancelFractionalsSuccess = () => {
  return {
    type: CANCEL_FRACTIONALS_SUCCESS
  }
}

export const loadFractionalsRequest = () => {
  return dispatch => {
    const request = axios
                      .get('/fractional_index.json', {
                        headers: getAuthHeader()
                      });
    return request.then((response) => {
      dispatch(loadFractionalsSuccess(response.data.data.fractionals));
    });
  }
}

export const buySellFractionalRequest = (request_type, stock_codes) => {
  return dispatch => {
    const request = axios
                      .post(`${process.env.REACT_APP_BALANCE_API_HOST}/fractional`,
                        {
                          request_type: request_type,
                          stock_codes: stock_codes
                        },
                        {
                          headers: getAuthHeader()
                        });
    return request.then((response) => {
      dispatch(push(`/account/fractional/complete`));
    })
    .catch(error => {
      dispatch(push(`/account/fractional/complete`));
    });
  }
}


export const loadFractionalsShowRequest = () => {
  return dispatch =>  {
    const request = axios
                      .get('/fractionals_request_show.json', {
                        headers: getAuthHeader()
                      });
    return request.then((response) => {
      dispatch(loadFractionalsShowSuccess(response.data.data.fractionals));
    });
  }
}

export const cancelFractionalsRequest = (stock_codes) =>  {
  return dispatch => {
     const request = axios
                      .post(`${process.env.REACT_APP_BALANCE_API_HOST}/fractional/cancel`,
                        {
                          stock_codes: stock_codes
                        },
                        {
                          headers: getAuthHeader()
                        });
    return request.then((response) => {
      dispatch(push(`/account/fractional/cancel/complete`));
    })
    .catch(error => {
      dispatch(push(`/account/fractional/cancel/complete`));
    });
  }
}
