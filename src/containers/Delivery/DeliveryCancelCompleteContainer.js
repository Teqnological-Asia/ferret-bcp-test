import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeliveryCancelComplete from '../../components/Delivery/Cancel/Complete'

class DeliveryCancelCompleteContainer extends Component {
  render() {
    return (
      <DeliveryCancelComplete />
    );
  }
}

export default DeliveryCancelCompleteContainer;
