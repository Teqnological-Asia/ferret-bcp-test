import { push } from 'react-router-redux';
import axios from 'axios';
import qs from 'qs';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, EXPIRED_TOKEN } from '../constants/auth';
import { getToken } from '../utils';

export const getAuthHeader = () => {
  return {
    Authorization: `Bearer ${getToken()}`
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
    const loginRequest = axios.post(`${process.env.REACT_APP_COGNITO_LOGIN_API_HOST}/signin`, params);

    return loginRequest
            .then((response) => {
              const token = response.data.data.token;
              if (isRemember) {
                localStorage.setItem('token', token);
                localStorage.setItem('is_unconfirmed', true);
              } else {
                sessionStorage.setItem('token', token);
                sessionStorage.setItem('is_unconfirmed', true);
              }
              const profileRequest = axios
                                      .get(`${process.env.REACT_APP_USER_INFORMATION_API_HOST}/profile`, {
                                        headers: getAuthHeader()
                                      });
              return profileRequest
                                .then((response) => {
                                  const name = response.data.data.profile.name_kanji;
                                  if (isRemember) {
                                    localStorage.setItem('name', name);
                                  } else {
                                    sessionStorage.setItem('name', name);
                                  }
                                  dispatch(loginSuccess());
                                  dispatch(push('/account'));
                                })
                                .catch(error => {
                                  localStorage.removeItem('token');
                                  sessionStorage.removeItem('token');
                                  let errorMessage = '';
                                  if (error.response) {
                                    errorMessage = error.response.data.message;
                                  }
                                  dispatch(loginFailure(errorMessage));
                                });
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

export const invalidTokenLogoutRequest = () => {
  return dispatch => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    dispatch(logoutSuccess());
    dispatch(push('/account/login'));
  }
}

export const invalidToken = () => {
  return {
    type: EXPIRED_TOKEN
  }
}

export const submitConfirmationRequest = () => {
  return dispatch => {
    localStorage.removeItem('is_unconfirmed');
    sessionStorage.removeItem('is_unconfirmed');
  }
}
