import React, { Component } from 'react';
import { connect } from 'react-redux';
import FractionalComplete from '../../components/Fractional/Complete';

class FractionalCompleteContainer extends Component {
  render() {
    return (
      <FractionalComplete />
    );
  }
}

export default connect()(FractionalCompleteContainer);
