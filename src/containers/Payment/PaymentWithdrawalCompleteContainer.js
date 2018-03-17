import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaymentWithdrawalComplete from '../../components/Payment/Withdrawal/Complete';

class PaymentWithdrawalCompleteContainer extends Component {
  render() {
    return (
      <PaymentWithdrawalComplete />
    );
  }
}

export default connect()(PaymentWithdrawalCompleteContainer);
