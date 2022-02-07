import {LOAD_TRADE_CASH_HISTORIES_SUCCESS} from "../constants/tradeCashHistory";

const initialState = {
  tradeCashHistories: [],
  currentPage: null,
  totalPages: null,
};

export const tradeCashHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TRADE_CASH_HISTORIES_SUCCESS:
      return {
        tradeCashHistories: action.tradeCashHistories,
        currentPage: action.currentPage,
        totalPages: action.totalPages
      };
    default:
      return state;
  }
}

export default tradeCashHistoryReducer;