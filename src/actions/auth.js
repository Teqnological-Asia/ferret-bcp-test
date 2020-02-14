import {
  push
} from 'react-router-redux';
import axios from 'axios';
import qs from 'qs';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  EXPIRED_TOKEN,
  SET_ANTI_SOCIAL
} from '../constants/auth';
import {
  getToken
} from '../utils';
import { setLoading } from '../actions/loading'

export const getAuthHeader = () => {
  return {
    Authorization: `Bearer ${getToken()}`
  }
}

export const setHeader = (params) =>{
  return{
    params: params,
    paramsSerializer: params =>
        qs.stringify(params, { arrayFormat: "repeat" }),
      headers: getAuthHeader()
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

export const setAntiSocial = (isAntiSocial) => {
  return {
    type: SET_ANTI_SOCIAL,
    isAntiSocial
  }
}

export const loginRequest = (email, password) => {
  return dispatch => {
    dispatch(setLoading(true))
    const params = qs.stringify({
      email,
      password
    });
    const loginRequest = axios.post(`${process.env.REACT_APP_COGNITO_LOGIN_API_HOST}/signin`, params);

    return loginRequest
      .then((response) => {
        const token = response.data.data.token;
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('is_unconfirmed', true);
        dispatch(accountStatusRequest())
      })
      .catch(error => {
        let errorMessage = '';
        if (error.response) {
          errorMessage = error.response.data.message;
        }
        dispatch(loginFailure(errorMessage));
        dispatch(setLoading(false))
      });
  };
}

const accountStatusRequest = () => ( dispatch => {
  const url = `${process.env.REACT_APP_OPENACCOUNT_API_HOST}/v3/accounts/status`
  const options = {
    headers: getAuthHeader()
  }
  return axios.get(url, options)
    .then(({ data: { data: { items } } }) => {
      const {
        account_status, identification_status,
        progress_status, antisocial_status,
        posted_status, identification_messages,
        profile_messages
      } = items
      if (antisocial_status === 'ng') {
        dispatch(setAntiSocial(true))
        dispatch(setLoading(false))
        sessionStorage.clear()
      } else if (account_status === 'available') {
        sessionStorage.setItem('account_status', account_status)
        dispatch(profileRequest())
      } else {
        sessionStorage.setItem('account_status', account_status)
        sessionStorage.setItem('identification_status', identification_status)
        sessionStorage.setItem('progress_status', progress_status)
        sessionStorage.setItem('posted_status', posted_status)
        sessionStorage.setItem('identification_messages', JSON.stringify(identification_messages))
        sessionStorage.setItem('profile_messages', JSON.stringify(profile_messages))
        sessionStorage.setItem('path', '/openaccount/check-status')
        window.location.href = '/op/index.html'
        dispatch(setLoading(false))
      }
    })
    .catch(error => {
      let errorMessage = '';
      if (error.response) {
        errorMessage = error.response.data.message;
      }
      dispatch(loginFailure(errorMessage));
      dispatch(setLoading(false))
    })
})

const profileRequest = () => {
  return dispatch => {
    const profileRequest = axios
    .get(`${process.env.REACT_APP_USER_INFORMATION_API_HOST}/profile`, {
      headers: getAuthHeader()
    });
    return profileRequest
      .then((response) => {
        const name = response.data.data.profile.name_kanji;
        const marginAccountStatus = response.data.data.profile.margin_account_status;
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('marginAccountStatus', marginAccountStatus);
        dispatch(loginSuccess());
        const redirect = sessionStorage.getItem('redirectUrl') || '/account';
        dispatch(push(redirect));
        dispatch(setLoading(false))
        sessionStorage.removeItem('redirectUrl')
      })
      .catch(error => {
        sessionStorage.removeItem('token');
        let errorMessage = '';
        if (error.response) {
          errorMessage = error.response.data.message;
        }
        dispatch(loginFailure(errorMessage));
        dispatch(setLoading(false))
      });
  }
}

export const logoutRequest = () => {
  return dispatch => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('currentAccountType');
    dispatch(logoutSuccess());
    dispatch(push('/account/logout'));
  }
}

export const invalidTokenLogoutRequest = () => {
  return dispatch => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('currentAccountType');
    dispatch(logoutSuccess());
    dispatch(push('/account/login'));
  }
}

export const invalidToken = () => {
  return {
    type: EXPIRED_TOKEN
  }
}