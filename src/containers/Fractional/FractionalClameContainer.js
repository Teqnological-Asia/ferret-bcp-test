import React, { Component } from 'react';
import { connect } from 'react-redux';
import FractionClame from '../../components/Fractional/Clame';

class FractionalClameContainer extends Component {
  render() {
    return (
      <FractionClame />
    );
  }
}

export default connect()(FractionalClameContainer);
