import { LOAD_TRADE_LENDING_BALANCE_SUCCESS } from '../constants/tradeLendingBalance';

const initialState = {
  tradeLendingBalance: [],
  attributes: {}
};

export const tradeLendingBalanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TRADE_LENDING_BALANCE_SUCCESS:
      return {
        ...state,
        tradeLendingBalance: action.tradeLendingBalance,
        attributes: action.attributes
      };
    default:
      return state;
  }
}

export default tradeLendingBalanceReducer;