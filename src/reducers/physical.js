import {
  LOAD_PHYSICALS_SUCCESS,
  LOAD_STOCK_DETAIL_SUCCESS,
  LOAD_PHYSICAL_DETAIL_SUCCESS,
  SAVE_ORDER_FORM,
  CREATE_ORDER_SUCCESS,
  SAVE_ORDER_SEND_PARAMS
} from '../constants/physical';

const initialState = {
  physicals: [],
  physicalDetail: null,
  stockDetail: null,
  orderFormValues: null,
  orderSendParams: null
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
    case SAVE_ORDER_SEND_PARAMS:
      return {
        ...state,
        orderSendParams: action.orderSendParams
      }
    case CREATE_ORDER_SUCCESS:
      return initialState;
    default:
      return state;
  }
}

export default physicalReducer;