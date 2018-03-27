import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from '../constants/auth';

const initialState = {
  name: null,
  isAuthenticated: false,
  error: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      };
    case LOGIN_FAILURE:
      return {
        name: null,
        isAuthenticated: false,
        error: action.error
      }
    case LOGOUT_SUCCESS:
      return {
        name: null,
        isAuthenticated: false,
        error: null
      }
    default:
      return state;
  }
}

export default authReducer;