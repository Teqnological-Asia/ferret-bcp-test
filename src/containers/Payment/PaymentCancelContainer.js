import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaymentCancel from '../../components/Payment/Cancel';

class PaymentCancelContainer extends Component {
  render() {
    return (
      <PaymentCancel />
    );
  }
}

export default connect()(PaymentCancelContainer);
