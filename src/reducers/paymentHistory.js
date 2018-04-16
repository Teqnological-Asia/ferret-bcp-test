import { LOAD_PAYMENT_HISTORY_SUCCESS } from '../constants/paymentHistory';

const initialState = {
  paymentHistories: []
};

export const paymentHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PAYMENT_HISTORY_SUCCESS:
      return {
        paymentHistories: action.paymentHistories
      };
    default:
      return state;
  }
}

export default paymentHistoryReducer;