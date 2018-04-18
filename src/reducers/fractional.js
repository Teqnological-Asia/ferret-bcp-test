import {
  LOAD_FRACTIONALS_SUCCESS,
  BUY_SELL_FRACTIONALS_SUCCESS,
  LOAD_FRACTIONALS_SHOW_SUCCESS,
  CANCEL_FRACTIONALS_SUCCESS
} from '../constants/fractional';

const initialState = {
  fractionals: [],
}

export const fractionalReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FRACTIONALS_SUCCESS:
      return {
        fractionals: action.fractionals
      };
    case LOAD_FRACTIONALS_SHOW_SUCCESS:
      return {
        fractionals: action.fractionals
      };
    case CANCEL_FRACTIONALS_SUCCESS:
      return initialState;
    case BUY_SELL_FRACTIONALS_SUCCESS:
      return initialState;
    default:
      return state;
  }
}

export default fractionalReducer;
