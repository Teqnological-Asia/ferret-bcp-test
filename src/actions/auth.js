import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/auth';

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user
  }
}

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    error
  }
}

export const loginRequest = (email, password, isRemember) => {
  return dispatch => {
    console.log("ok")
    dispatch(loginSuccess({email: email}));
  };
}