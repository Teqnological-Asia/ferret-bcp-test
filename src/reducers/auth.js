import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, EXPIRED_TOKEN } from '../constants/auth';

const initialState = {
  error: null,
  isExpiredToken: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        isExpiredToken: false,
        error: null
      };
    case LOGIN_FAILURE:
      return {
        isExpiredToken: false,
        error: action.error
      }
    case LOGOUT_SUCCESS:
      return {
        isExpiredToken: false,
        error: null
      }
    case EXPIRED_TOKEN:
      return {
        isExpiredToken: true,
        error: null
      }
    default:
      return state;
  }
}

export default authReducer;