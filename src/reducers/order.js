import { LOAD_ORDERS_SUCCESS } from '../constants/order';

const initialState = {
  orders: [],
  currentPage: null,
  totalPages: null
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ORDERS_SUCCESS:
      return {
        orders: action.orders,
        currentPage: action.currentPage,
        totalPages: action.totalPages
      };
    default:
      return state;
  }
}

export default orderReducer;