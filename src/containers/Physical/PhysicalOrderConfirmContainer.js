import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhysicalOrderConfirm from '../../components/Physical/Order/Confirm';

class PhysicalOrderConfirmContainer extends Component {
  render() {
    return (
      <PhysicalOrderConfirm />
    );
  }
}

export default connect()(PhysicalOrderConfirmContainer);
