import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderCancel from '../../components/Order/Cancel';

class OrderCancelContainer extends Component {
  render() {
    return (
      <OrderCancel />
    );
  }
}

export default connect()(OrderCancelContainer);