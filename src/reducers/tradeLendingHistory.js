import { LOAD_TRADE_LENDING_HISTORIES_SUCCESS } from '../constants/tradeLendingHistory';

const initialState = {
  tradeLendingHistories: [],
  currentPage: null,
  totalPages: null
};

export const tradeLendingHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TRADE_LENDING_HISTORIES_SUCCESS:
      return {
        tradeLendingHistories: action.tradeLendingHistories,
        currentPage: action.currentPage,
        totalPages: action.totalPages
      };
    default:
      return state;
  }
}

export default tradeLendingHistoryReducer;