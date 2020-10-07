import { Component } from 'react';
import configRoutes, {routes} from '../routes';
import axios from 'axios';
import { getAuthHeader } from '../actions/auth';
import * as qs from "qs";
import store from '../store';
import {push} from "react-router-redux";

class AppContainer extends Component {
  componentWillMount() {
    const currentPath = window.location.pathname;
    const authenticatedRoutes = routes.filter(route => route.isAuthenticated).map(route => route.path);
    if (!sessionStorage.getItem('token') &&  authenticatedRoutes.includes(currentPath)) {
      const {token, prompt} = qs.parse(window.location.search, { ignoreQueryPrefix: true });
      sessionStorage.setItem('redirectUrl', currentPath);
      prompt && sessionStorage.setItem('prompt', prompt);
      if (token) {
        // Auto-Login: Stream App open BCP with token
        sessionStorage.setItem('token', token);
        store.dispatch(push('/account'))
      }
    }
  }
  componentDidMount() {
    const currentPath = window.location.pathname;

    if (sessionStorage.getItem('token') !== null && currentPath.match('/account')) {
      // const url = `${process.env.REACT_APP_OPENACCOUNT_API_HOST}/v3/accounts/status`;
      // const options = {
      //   headers: getAuthHeader()
      // };
      // axios.get(url, options).then(({ data: { data: { items } } }) => {
      //   const {
      //     account_status, identification_status, progress_status,
      //     posted_status, identification_messages, profile_messages
      //   } = items;
      //   if (account_status === 'available') {
      //     sessionStorage.setItem('account_status', account_status)
      //   } else {
      //     sessionStorage.setItem('account_status', account_status);
      //     sessionStorage.setItem('identification_status', identification_status);
      //     sessionStorage.setItem('progress_status', progress_status);
      //     sessionStorage.setItem('posted_status', posted_status);
      //     sessionStorage.setItem('identification_messages', JSON.stringify(identification_messages));
      //     sessionStorage.setItem('profile_messages', JSON.stringify(profile_messages));
      //     sessionStorage.setItem('path', '/openaccount/check-status');
      //     // window.location.href = '/op/index.html'
      //     console.log('here');
      //   }
      // }).catch(error => {})

      const url = `${process.env.REACT_APP_OPENACCOUNT_DRACO37_SITE}/account/status`
      const options = {
        headers: getAuthHeader()
      }
      const token = sessionStorage.getItem('token')
      return axios.get(url, options)
        .then(({ data: items }) => {
          const { equity } = items.result
          if (equity === 'AVAILABLE') {
            const res = equity.toLowerCase()
            sessionStorage.setItem('account_status', res)
          } else {
            const redirectUri = `${process.env.REACT_WEB_OPENACCOUNT || 'http://localhost:8080'}/account-state?token=${token}`
            window.location.href=redirectUri
          }
        })
        .catch(error => {})
        }
  }

  render() {
    return (
      configRoutes()
    );
  }
}

export default AppContainer;