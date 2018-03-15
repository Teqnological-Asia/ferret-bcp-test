import React, { Component } from 'react';
import { connect } from 'react-redux';
import MarginDelivery from '../../components/Margin/Delivery';

class MarginDeliveryContainer extends Component {
  render() {
    return (
      <MarginDelivery />
    );
  }
}

export default connect()(MarginDeliveryContainer);