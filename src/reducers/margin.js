import { LOAD_MARGIN_SUCCESS, LOAD_STOCK_MARGIN_SUCCESS } from '../constants/margin';

const initialState = {
  marginPositions: [],
  stock: null
};

export const marginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MARGIN_SUCCESS:
      return {
        ...state,
        marginPositions: action.marginPositions
      };
    case LOAD_STOCK_MARGIN_SUCCESS:
      return {
        ...state,
        stock: action.stockMargin
      };
    default:
      return state;
  }
}

export default marginReducer;
