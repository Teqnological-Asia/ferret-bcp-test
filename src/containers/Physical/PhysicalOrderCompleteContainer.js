import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhysicalOrderComplete from '../../components/Physical/Order/Complete';

class PhysicalOrderCompleteContainer extends Component {
  render() {
    return (
      <PhysicalOrderComplete />
    );
  }
}

export default connect()(PhysicalOrderCompleteContainer);
