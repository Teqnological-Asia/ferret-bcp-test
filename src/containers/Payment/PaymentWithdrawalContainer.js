import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaymentWithdrawal from '../../components/Payment/Withdrawal';

class PaymentWithdrawalContainer extends Component {
  render() {
    return (
      <PaymentWithdrawal />
    );
  }
}

export default connect()(PaymentWithdrawalContainer);
