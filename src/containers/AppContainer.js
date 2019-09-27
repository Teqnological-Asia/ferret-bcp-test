import { Component } from 'react';
import configRoutes from '../routes';
import axios from 'axios';
import { getAuthHeader } from '../actions/auth';

class AppContainer extends Component {
  componentDidMount() {
    if (sessionStorage.getItem('token') !== null && window.location.pathname.match('/account')) {
      const url = `${process.env.REACT_APP_OPENACCOUNT_API_HOST}/v3/accounts/status`
      const options = {
        headers: getAuthHeader()
      }
      axios.get(url, options).then(({ data: { data: { items } } }) => {
        const {
          account_status, identification_status, progress_status,
          posted_status, identification_messages, profile_messages
        } = items
        if (account_status === 'available') {
          sessionStorage.setItem('account_status', account_status)
        } else {
          sessionStorage.setItem('account_status', account_status)
          sessionStorage.setItem('identification_status', identification_status)
          sessionStorage.setItem('progress_status', progress_status)
          sessionStorage.setItem('posted_status', posted_status)
          sessionStorage.setItem('identification_messages', JSON.stringify(identification_messages))
          sessionStorage.setItem('profile_messages', JSON.stringify(profile_messages))
          sessionStorage.setItem('path', '/openaccount/check-status')
          window.location.href = '/op/index.html'
        }
      }).catch(error => {})
    }
  }

  render() {
    return (
      configRoutes()
    );
  }
}

export default AppContainer;