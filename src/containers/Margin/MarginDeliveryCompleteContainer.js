import React, { Component } from 'react';
import { connect } from 'react-redux';
import MarginDeliveryComplete from '../../components/Margin/Delivery/Complete';

class MarginDeliveryCompleteContainer extends Component {
  render() {
    return (
      <MarginDeliveryComplete />
    );
  }
}

export default connect()(MarginDeliveryCompleteContainer);