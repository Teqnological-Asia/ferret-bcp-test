import React, { Component } from 'react';
import { connect } from 'react-redux';
import FractionalCancel from '../../components/Fractional/Cancel';

class FractionalCancelContainer extends Component {
  render() {
    return (
      <FractionalCancel />
    );
  }
}

export default FractionalCancelContainer;
