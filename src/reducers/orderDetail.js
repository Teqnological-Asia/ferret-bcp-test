import { LOAD_ORDER_DETAIL_SUCCESS } from '../constants/orderDetail';

const initialState = {
  order: null,
  events: []
};

export const orderDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ORDER_DETAIL_SUCCESS:
      return {
        order: action.order,
        events: action.events
      };
    default:
      return state;
  }
}

export default orderDetailReducer;