import React, { Component } from 'react';
import { connect } from 'react-redux';
import FractionalCancelComplete from '../../components/Fractional/Cancel/Complete';

class FractionalCancelCompleteContainer extends Component {
  render() {
    return (
      <FractionalCancelComplete />
    );
  }
}

export default FractionalCancelCompleteContainer;
