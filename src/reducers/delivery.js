import {
  LOAD_DELIVERIES_SUCCESS,
  CANCEL_DELIVERIES_SUCCESS
} from '../constants/delivery';

const initialState = {
  deliveries: []
};

export const deliveryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DELIVERIES_SUCCESS:
      return {
        deliveries: action.deliveries
      };
    case CANCEL_DELIVERIES_SUCCESS:
      return initialState;
    default:
      return state;
  }
}

export default deliveryReducer;
