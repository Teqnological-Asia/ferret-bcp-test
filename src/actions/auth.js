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
import { setLoading } from './loading'
import {loadAccountsInfoRequest} from "./profile";
import Amplify from "../auth/amplify";

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

export const loginRequest = (authz_code, user_id) => {
  return dispatch => {
    dispatch(setLoading(true))
    const amplify = new Amplify({
      authzCode: authz_code,
      baasId: user_id,
    });
    return amplify.login()
      .then((result) => {
        const session = result.getSignInUserSession();
        if (session) {
          const authToken = session.getAccessToken().getJwtToken()
          sessionStorage.setItem('token', authToken)
          sessionStorage.setItem('is_unconfirmed', 'true')
          dispatch(accountStatusRequest())
        } else {
          dispatch(setLoading(false))
          dispatch(push('/account/login'))
        }
      })
      .catch(error => {
        let errorMessage = '';
        if (error.response) {
          errorMessage = error.response.data.message
        }
        dispatch(loginFailure(errorMessage))
        dispatch(setLoading(false))
        dispatch(push('/account/login'))
      })
  };
}

const accountStatusRequest = () => ( dispatch => {
  const url = `${process.env.REACT_APP_ACCOUNT_MANAGER_API}/v4/accountStatus`
  const options = {
    headers: getAuthHeader()
  }
  return axios.get(url, options)
    .then(({ data: items }) => {
      const { equity } = items.status
      if (equity === 'AVAILABLE') {
        const res = equity.toLowerCase()
        sessionStorage.setItem('account_status', res)
        dispatch(profileRequest())
      } else {
        const redirectUri = `${process.env.REACT_APP_OPENACCOUNT_SITE || 'http://localhost:8080'}/account-state?from=bcplogin`
        window.location.href=redirectUri
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
    // dispatch(loadStockLendingStatus());
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
        dispatch(loadAccountsInfoRequest(true))
        // const redirect = sessionStorage.getItem('redirectUrl') || '/account';
        // setTimeout(() => { //Delay redirect to update stock lending status
        //   dispatch(push(redirect));
        //   sessionStorage.removeItem('redirectUrl');
        //   dispatch(setLoading(false))
        // }, 100)
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