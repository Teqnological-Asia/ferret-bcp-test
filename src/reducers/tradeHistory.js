import { LOAD_TRADE_HISTORIES_SUCCESS } from '../constants/tradeHistory';

const initialState = {
  tradeHistories: [],
  currentPage: null,
  totalPages: null
};

export const tradeHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TRADE_HISTORIES_SUCCESS:
      return {
        tradeHistories: action.tradeHistories,
        currentPage: action.currentPage,
        totalPages: action.totalPages
      };
    default:
      return state;
  }
}

export default tradeHistoryReducer;