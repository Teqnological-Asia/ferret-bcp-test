import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';

class DashboardContainer extends Component {
  render() {
    return (
      <Dashboard />
    );
  }
}

export default connect()(DashboardContainer);