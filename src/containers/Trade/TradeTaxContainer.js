import React, { Component } from 'react';
import { connect } from 'react-redux';
import TradeTax from '../../components/Trade/Tax';

class TradeTaxContainer extends Component {
  render() {
    return (
      <TradeTax />
    );
  }
}

export default connect()(TradeTaxContainer);