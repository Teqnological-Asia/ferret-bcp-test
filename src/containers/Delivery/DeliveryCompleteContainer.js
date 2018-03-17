import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeliveryComplete from '../../components/Delivery/Complete'

class DeliveryCompleteContainer extends Component {
  render() {
    return (
      <DeliveryComplete />
    );
  }
}

export default DeliveryCompleteContainer;
