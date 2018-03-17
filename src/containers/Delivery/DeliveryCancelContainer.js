import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeliveryCancel from '../../components/Delivery/Cancel'

class DeliveryCancelContainer extends Component {
  render() {
    return (
      <DeliveryCancel />
    );
  }
}

export default connect()(DeliveryCancelContainer);
