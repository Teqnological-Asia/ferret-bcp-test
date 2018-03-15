import React, { Component } from 'react';
import { connect } from 'react-redux';
import MarginReceipt from '../../components/Margin/Receipt';

class MarginReceiptContainer extends Component {
  render() {
    return (
      <MarginReceipt />
    );
  }
}

export default connect()(MarginReceiptContainer);