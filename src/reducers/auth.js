import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/auth';

export const authReducer = (state = {user: null, isAuthenticated: false, error: ''}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isAuthenticated: true
      };
    case LOGIN_FAILURE:
      return {
        user: null,
        isAuthenticated: false,
        error: action.error
      }
    default:
      return state;
  }
}

export default authReducer