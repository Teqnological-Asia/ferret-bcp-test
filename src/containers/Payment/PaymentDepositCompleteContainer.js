import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaymentDepositComplete from '../../components/Payment/Deposit/Complete';

class PaymentDepositCompleteContainer extends Component {
  render() {
    return (
      <PaymentDepositComplete />
    );
  }
}

export default connect()(PaymentDepositCompleteContainer);
