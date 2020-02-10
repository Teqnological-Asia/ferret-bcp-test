import { LOAD_TRADE_LENDING_BALANCE_SUCCESS } from '../constants/tradeLendingBalance';

const initialState = {
  tradeLendingBalance: [],
};

export const tradeLendingBalanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TRADE_LENDING_BALANCE_SUCCESS:
      return {
        tradeLendingBalance: action.tradeLendingBalance,

      };
    default:
      return state;
  }
}

export default tradeLendingBalanceReducer;