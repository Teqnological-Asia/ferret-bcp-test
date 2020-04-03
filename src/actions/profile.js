import axios from 'axios';
import { LOAD_PROFILE_SUCCESS, LOAD_ACCOUNTS_INFO_SUCCESS } from '../constants/profile';
import { getAuthHeader } from './auth';
import { loadPublicNotificationsRequest } from '../actions/publicNotification';
import { loadPrivateNotificationsRequest } from '../actions/privateNotification';
import { setLoading } from '../actions/loading';
import {push} from "react-router-redux";

export const loadProfileSuccess = (profile, documents) => {
  return {
    type: LOAD_PROFILE_SUCCESS,
    profile,
    documents
  }
};

export const loadAccountsInfoSuccess = (currentAccount, accounts) => ({
  type: LOAD_ACCOUNTS_INFO_SUCCESS,
  currentAccount,
  accounts
});

export const loadProfileRequest = (params) => {
  return dispatch => {
    dispatch(loadStockLendingStatus());
    dispatch(setLoading(true));
    const request = axios
                      .get(`${process.env.REACT_APP_USER_INFORMATION_API_HOST}/profile`, {
                        headers: getAuthHeader()
                      });

    return request
            .then((response) => {
              const profile = response.data.data.profile;
              const name = profile.name_kanji;
              const marginAccountStatus = profile.margin_account_status;
              sessionStorage.setItem('name', name);
              sessionStorage.setItem('marginAccountStatus', marginAccountStatus);
              const documents = response.data.data.documents;
              dispatch(loadProfileSuccess(profile, documents));
              dispatch(loadPublicNotificationsRequest());
              dispatch(loadPrivateNotificationsRequest());
              setTimeout(() => { //Delay redirect to update stock lending status
                const redirect = sessionStorage.getItem('redirectUrl');
                if (redirect) {
                  dispatch(push(redirect));
                  sessionStorage.removeItem('redirectUrl')
                }
                dispatch(setLoading(false))
              }, 100)
            });
  };
};

export const loadStockLendingStatus = () => {
  return dispatch => {
    dispatch(setLoading(true));
    const request = axios
      .get(`${process.env.REACT_APP_STREAM_API_HOST}/v1/user/lending_stock/status`, {
        headers: getAuthHeader()
      });

    return request
      .then((response) => {
        const {status} = response.data.data;
        sessionStorage.setItem('stockLendingStatus', status);
        dispatch(setLoading(false))
      })
      .catch(err => {})
  };
};

export const loadAccountsInfoRequest = () => {
  return dispatch => {
    dispatch(setLoading(true));
    const request = axios
      .get(`${process.env.REACT_APP_OPENACCOUNT_API_HOST}/v4/userAccounts`, {
        headers: getAuthHeader()
      });

    return request
      .then(({data: {currentAccount, accounts}}) => {
        sessionStorage.setItem('currentAccountType', currentAccount.type);
        dispatch(loadAccountsInfoSuccess(currentAccount, accounts));
        dispatch(setLoading(false))
      });
  };
};
