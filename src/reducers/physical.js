import { LOAD_PHYSICALS_SUCCESS, LOAD_STOCK_DETAIL_SUCCESS, LOAD_PHYSICAL_DETAIL_SUCCESS, SAVE_ORDER_FORM } from '../constants/physical';

const initialState = {
  physicals: [],
  physicalDetail: null,
  stockDetail: null,
  orderFormValues: null
};

export const physicalReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PHYSICALS_SUCCESS:
      return {
        ...state,
        physicals: action.physicals
      };
    case LOAD_STOCK_DETAIL_SUCCESS:
      return {
        ...state,
        stockDetail: action.stockDetail
      }
    case LOAD_PHYSICAL_DETAIL_SUCCESS:
      return {
        ...state,
        physicalDetail: action.physicalDetail
      }
    case SAVE_ORDER_FORM:
      return {
        ...state,
        orderFormValues: action.orderFormValues
      }
    default:
      return state;
  }
}

export default physicalReducer;