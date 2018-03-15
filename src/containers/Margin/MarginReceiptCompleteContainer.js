import React, { Component } from 'react';
import { connect } from 'react-redux';
import MarginReceiptComplete from '../../components/Margin/Receipt/Complete';

class MarginReceiptCompleteContainer extends Component {
  render() {
    return (
      <MarginReceiptComplete />
    );
  }
}

export default connect()(MarginReceiptCompleteContainer);