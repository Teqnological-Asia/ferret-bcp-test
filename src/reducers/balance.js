import { LOAD_BALANCE_SUCCESS } from '../constants/balance';

const initialState = {
  tradeCapacities: []
};

export const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BALANCE_SUCCESS:
      return {
        tradeCapacities: action.tradeCapacities
      };
    default:
      return state;
  }
}

export default balanceReducer;
