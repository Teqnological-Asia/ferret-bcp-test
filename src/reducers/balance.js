import { LOAD_BALANCE_SUCCESS, LOAD_BALANCE_FAILURE } from '../constants/balance';

const initialState = {
  error: null
};

export const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BALANCE_SUCCESS:
      return {
        error: null
      };
    case LOAD_BALANCE_FAILURE:
      return {
        error: action.error
      }
    default:
      return state;
  }
}

export default balanceReducer;
