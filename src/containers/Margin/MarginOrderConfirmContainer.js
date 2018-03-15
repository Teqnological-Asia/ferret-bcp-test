import React, { Component } from 'react';
import { connect } from 'react-redux';
import MarginOrderConfirm from '../../components/Margin/Order/Confirm';

class MarginOrderConfirmContainer extends Component {
  render() {
    return (
      <MarginOrderConfirm />
    );
  }
}

export default connect()(MarginOrderConfirmContainer);