import { SET_LOADING } from '../constants/loading';

const initialState = {
  isLoading: false
};

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
    return {
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
}

export default loadingReducer;