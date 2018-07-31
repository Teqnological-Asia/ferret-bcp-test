import { LOAD_MARGIN_SUCCESS } from '../constants/margin';

const initialState = {
  marginPositions: []
};

export const marginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MARGIN_SUCCESS:
      return {
        marginPositions: action.marginPositions
      };
    default:
      return state;
  }
}

export default marginReducer;
