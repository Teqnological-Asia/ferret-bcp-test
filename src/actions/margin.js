import axios from 'axios';
import { LOAD_MARGIN_SUCCESS } from '../constants/margin';
import { getAuthHeader } from './auth';

export const loadMarginSuccess = (marginPositions) => {
  return {
    type: LOAD_MARGIN_SUCCESS,
    marginPositions
  }
}

export const loadMarginRequest = () => {
  return dispatch => {
    const request = axios
                      .get(`${process.env.REACT_APP_BALANCE_API_HOST}/margin_balances`, {
                        headers: getAuthHeader()
                      });

    return request.then((response) => {
      dispatch(loadMarginSuccess(response.data.data.positions));
    });
  };
}