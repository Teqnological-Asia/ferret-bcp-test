import React, { Component } from 'react';
import { connect } from 'react-redux';
import FractionalSell from '../../components/Fractional/Sell';

class FractionalSellContainer extends Component {
  render() {
    return (
      <FractionalSell />
    );
  }
}

export default connect()(FractionalSellContainer);
