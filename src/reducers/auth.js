import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/auth';

export const authReducer = (state = {user: null, isAuthenticated: false}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        user: action.user,
        isAuthenticated: true
      };
    case LOGIN_FAILURE:
      return {
        user: null,
        isAuthenticated: false
      }
    default:
      return state;
  }
}

export default authReducer