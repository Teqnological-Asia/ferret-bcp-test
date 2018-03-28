import { push } from 'react-router-redux';
import axios from 'axios';
import qs from 'qs';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from '../constants/auth';

export const getAuthHeader = () => {
  return {
    Authorization: 'Bearer eyJraWQiOiJXK3JSU2czNnB0UzNjXC9wOTBWOWVoM3ZhQmhQSis0K2licFhPS1BDUml6QT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIzNGI2ZTMwZS1mYjI1LTRiODQtYmNmNC04M2VmNDE0NjIwZDIiLCJldmVudF9pZCI6ImNmYTM4NDhkLTMyNWMtMTFlOC1hOWNjLTkzZGNlOTJmN2Q3NCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1MjIyMjM0ODUsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1ub3J0aGVhc3QtMS5hbWF6b25hd3MuY29tXC9hcC1ub3J0aGVhc3QtMV9NaVVLVmxxVjkiLCJleHAiOjE1MjIyMjcwODUsImlhdCI6MTUyMjIyMzQ4NSwianRpIjoiNDA3YWRlN2UtNDJhZC00YzRmLWFiNWQtMzJmZWI5MzU0YzYxIiwiY2xpZW50X2lkIjoiNms3MzdnbzFmY3Q0aDZlZTBraDFzcHFzOW0iLCJ1c2VybmFtZSI6ImFuaG5oKzMtaGQ5aXYxIn0.IQi7mldAqpNnd6SRPmVDwsrVlsmlAVBdksj0k_uTkPYoS6p1QCzeuDXUcEj1pyjxATk_d1GOx5UDWKDZpjw9D8_9pEOjEp_N0ozUomLkjG9xoViFlSErxJUJz-7ebgLpRa3NZGotI_31PY8iMLYFXf6xB_Htaws_nGvA-hLIwIdmba-pb19GKEI1JUsxvtRsh9LmodmKL1vbQIxDypjDeBLn_Owsqj4L3_bJJys1mheV1AOSdUvFbbcugOwg8eLnJi6_4S4n9ax8PMcfLYJTZg0Yi4Nb35jf2CftCNCaYzkdBXb8uHxzJoDYIiqMLEjuzJHGoEv2sOLCxX8jHgSWOw'
  }
}

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
              let errorMessage = '';
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