import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaymentCancelComplete from '../../components/Payment/Cancel/Complete';

class PaymentCancelCompleteContainer extends Component {
  render() {
    return (
      <PaymentCancelComplete />
    );
  }
}

export default connect()(PaymentCancelCompleteContainer);
