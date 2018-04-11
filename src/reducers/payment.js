import {
  LOAD_CASH_TRANSFER_SUCCESS,
  LOAD_CASH_WITHDRAWAL_SUCCESS,
  SAVE_WITHDRAWAL_AMOUNT,
  WITHDRAWAL_SUCCESS
} from '../constants/payment';

const initialState = {
  cashTransfer: null,
  cashWithdrawal: null,
  amount: null
};

export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CASH_TRANSFER_SUCCESS:
      return {
        ...state,
        cashTransfer: action.cashTransfer
      };
    case LOAD_CASH_WITHDRAWAL_SUCCESS:
      return {
        ...state,
        cashWithdrawal: action.cashWithdrawal
      };
    case SAVE_WITHDRAWAL_AMOUNT:
      return {
        ...state,
        amount: action.amount
      };
    case WITHDRAWAL_SUCCESS:
      return initialState;
    default:
      return state;
  }
}

export default paymentReducer;

