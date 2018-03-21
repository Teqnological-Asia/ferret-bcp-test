import { push } from 'react-router-redux';
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
    // Fake login
    const token = "thisistesttoken";
    if (isRemember) {
      localStorage.setItem('token', token);
    } else {
      sessionStorage.setItem('token', token);
    }
    
    const user = {email: email};
    dispatch(loginSuccess(user));
    dispatch(push('/account'));
  };
}