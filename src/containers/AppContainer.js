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
          } else {
            const redirectUri = `${process.env.REACT_APP_OPENACCOUNT_SITE || 'http://localhost:8080'}/account-state?from=bcplogin`
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