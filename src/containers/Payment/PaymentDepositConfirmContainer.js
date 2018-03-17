import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaymentDepositConfirm from '../../components/Payment/Deposit/Confirm';

class PaymentDepositConfirmContainer extends Component {
  render() {
    return (
      <PaymentDepositConfirm />
    );
  }
}

export default connect()(PaymentDepositConfirmContainer);
