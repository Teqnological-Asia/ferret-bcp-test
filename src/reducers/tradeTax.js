import { LOAD_IFRAME_URL_SUCCESS } from '../constants/tradeTax';

const initialState = {
  url: null
};

export const tradeTaxReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_IFRAME_URL_SUCCESS:
      return {
        url: action.url
      };
    default:
      return state;
  }
}

export default tradeTaxReducer;