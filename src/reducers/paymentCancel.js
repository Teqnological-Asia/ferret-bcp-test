import { LOAD_PAYMENT_CANCEL_LIST_SUCCESS } from '../constants/paymentCancel';

const initialState = {
  payments: []
};

export const paymentCancelReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PAYMENT_CANCEL_LIST_SUCCESS:
      return {
        payments: action.payments
      };
    default:
      return state;
  }
}

export default paymentCancelReducer;