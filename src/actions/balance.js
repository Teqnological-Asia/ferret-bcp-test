import { push } from 'react-router-redux';
import { LOAD_BALANCE_SUCCESS, LOAD_BALANCE_FAILURE } from '../constants/reminder';

export const loadBalanceSuccess = () => {
  return {
    type: LOAD_BALANCE_SUCCESS
  }
}

export const loadBalanceFailure = () => {
  return {
    type: LOAD_BALANCE_FAILURE
  }
}
