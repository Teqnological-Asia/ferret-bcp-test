import { Component } from 'react';
import configRoutes from '../routes';
import axios from 'axios';
import { getAuthHeader } from '../actions/auth';

class AppContainer extends Component {
  componentDidMount() {
    if (sessionStorage.getItem('token') !== null && window.location.pathname.match('/account')) {
      const url = `${process.env.REACT_APP_OPENACCOUNT_API_HOST}/account/status`
      const options = {
        headers: getAuthHeader()
      }
      axios.post(url, {}, options)
      .then(({ data: { data: { items } } }) => {
        const { account_status, identification_status, progress_status } = items
        if (account_status === 1) {
          sessionStorage.setItem('account_status', account_status)
        } else {
          sessionStorage.setItem('account_status', account_status)
          sessionStorage.setItem('identification_status', identification_status)
          sessionStorage.setItem('progress_status', progress_status)
          sessionStorage.setItem('path', '/openaccount/check-status')
          window.location.href = '/op/'
        }
      })
      .catch(error => {
      })
    }
  }

  render() {
    return (
      configRoutes()
    );
  }
}

export default AppContainer;