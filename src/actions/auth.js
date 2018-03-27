import { push } from 'react-router-redux';
import axios from 'axios';
import qs from 'qs';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from '../constants/auth';

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS
  }
}

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    error
  }
}

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}

export const loginRequest = (email, password, isRemember) => {
  return dispatch => {
    const params = qs.stringify({
      email,
      password
    });
    const request = axios.post(`${process.env.REACT_APP_COGNITO_LOGIN_API_HOST}/signin`, params);

    return request
            .then((response) => {
              const token = response.data.data.token;
              if (isRemember) {
                localStorage.setItem('token', token);
              } else {
                sessionStorage.setItem('token', token);
              }
              dispatch(loginSuccess());
              dispatch(push('/account'));
            })
            .catch(error => {
              let errorMessage = 'Server error';
              if (error.response) {
                errorMessage = error.response.data.message;
              }
              dispatch(loginFailure(errorMessage));
            });
  };
}

export const logoutRequest = () => {
  return dispatch => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    dispatch(logoutSuccess());
    dispatch(push('/account/logout'));
  }
}