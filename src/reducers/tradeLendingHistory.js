import { LOAD_TRADE_LENDING_HISTORIES_SUCCESS } from "../constants/tradeLendingHistory";

const initialState = {
  tradeLendingHistories: [],
  pageSize: null,
  currentPage: null,
  totalPages: null
};

export const tradeLendingHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TRADE_LENDING_HISTORIES_SUCCESS:
      const {
        tradeLendingHistories,
        pageSize,
        currentPage,
        totalPages
      } = action;
      return {
        tradeLendingHistories: tradeLendingHistories,
        pageSize: pageSize,
        currentPage: currentPage,
        totalPages: totalPages
      };
    default:
      return state;
  }
};

export default tradeLendingHistoryReducer;
