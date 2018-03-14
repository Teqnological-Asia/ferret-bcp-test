import React, { Component } from 'react';
import { connect } from 'react-redux';
import MarginOrder from '../../components/Margin/Order';

class MarginOrderContainer extends Component {
  render() {
    return (
      <MarginOrder />
    );
  }
}

export default connect()(MarginOrderContainer);