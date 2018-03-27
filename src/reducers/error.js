import { CREATE_ERROR, DELETE_ERROR } from '../constants/error';

const initialState = {
  error: null
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ERROR:
      return {
        error: action.error
      };
    case DELETE_ERROR:
      return {
        error: null
      }
    default:
      return state;
  }
}

export default errorReducer;