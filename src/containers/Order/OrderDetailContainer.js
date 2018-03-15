import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderDetail from '../../components/Order/Detail';

class OrderDetailContainer extends Component {
  render() {
    return (
      <OrderDetail />
    );
  }
}

export default connect()(OrderDetailContainer);