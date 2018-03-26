import { LOAD_TRADE_HISTORIES_SUCCESS, LOAD_TRADE_HISTORIES_FAILURE } from '../constants/tradeHistory';

const initialState = {
  tradeHistories: [],
  currentPage: null,
  totalPages: null,
  error: null
};

export const tradeHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TRADE_HISTORIES_SUCCESS:
      return {
        tradeHistories: action.tradeHistories,
        currentPage: action.currentPage,
        totalPages: action.totalPages,
        error: null
      };
    case LOAD_TRADE_HISTORIES_FAILURE:
      return {
        ...state,
        error: null
      }
    default:
      return state;
  }
}

export default tradeHistoryReducer;