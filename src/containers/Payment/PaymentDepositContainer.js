import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaymentDeposit from '../../components/Payment/Deposit';

class PaymentDepositContainer extends Component {
  render() {
    return (
      <PaymentDeposit />
    );
  }
}

export default connect()(PaymentDepositContainer);
