import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderCancelComplete from '../../components/Order/Cancel/Complete';

class OrderCancelCompleteContainer extends Component {
  render() {
    return (
      <OrderCancelComplete />
    );
  }
}

export default connect()(OrderCancelCompleteContainer);