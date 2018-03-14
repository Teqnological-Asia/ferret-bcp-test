import React, { Component } from 'react';
import { connect } from 'react-redux';
import Margin from '../../components/Margin';

class MarginContainer extends Component {
  render() {
    return (
      <Margin />
    );
  }
}

export default connect()(MarginContainer);