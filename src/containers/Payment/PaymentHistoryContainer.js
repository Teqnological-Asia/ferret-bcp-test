import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaymentHistory from '../../components/Payment/History';

class PaymentHistoryContainer extends Component {
  render() {
    return (
      <PaymentHistory />
    );
  }
}

export default connect()(PaymentHistoryContainer);
