import React, { Component } from 'react';
import { connect } from 'react-redux';
import Payment from '../../components/Payment';

class PaymentContainer extends Component {
  render() {
    return (
      <Payment />
    );
  }
}

export default connect()(PaymentContainer);
