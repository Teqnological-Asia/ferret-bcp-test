import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, EXPIRED_TOKEN } from '../constants/auth';

const initialState = {
  error: null,
  isInvalidToken: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        isInvalidToken: false,
        error: null
      };
    case LOGIN_FAILURE:
      return {
        isInvalidToken: false,
        error: action.error
      }
    case LOGOUT_SUCCESS:
      return {
        isInvalidToken: false,
        error: null
      }
    case EXPIRED_TOKEN:
      return {
        isInvalidToken: true,
        error: null
      }
    default:
      return state;
  }
}

export default authReducer;