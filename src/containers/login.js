import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../components/login';

class LoginContainer extends Component {
  render() {
    return (
      <Login />
    );
  }
}

export default connect()(LoginContainer);