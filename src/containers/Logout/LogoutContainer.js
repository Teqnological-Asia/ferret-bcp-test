import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logout from '../../components/Logout';

class LogoutContainer extends Component {
  render() {
    return (
      <Logout />
    );
  }
}

export default connect()(LogoutContainer);