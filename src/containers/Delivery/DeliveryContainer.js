import React, { Component } from 'react';
import { connect } from 'react-redux';
import Delivery from '../../components/Delivery';

class DeliveryContainer extends Component {
  render() {
    return (
      <Delivery />
    );
  }
}

export default DeliveryContainer;
