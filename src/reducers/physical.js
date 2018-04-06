import { LOAD_PHYSICALS_SUCCESS, LOAD_STOCK_DETAIL_SUCCESS, LOAD_PHYSICAL_DETAIL_SUCCESS } from '../constants/physical';

const initialState = {
  physicals: [],
  physicalDetail: null,
  stockDetail: null
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
    default:
      return state;
  }
}

export default physicalReducer;