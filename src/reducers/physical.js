import { LOAD_PHYSICALS_SUCCESS } from '../constants/physical';

const initialState = {
  physicals: []
};

export const physicalReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PHYSICALS_SUCCESS:
      return {
        physicals: action.physicals
      };
    default:
      return state;
  }
}

export default physicalReducer;