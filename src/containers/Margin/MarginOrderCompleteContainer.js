import React, { Component } from 'react';
import { connect } from 'react-redux';
import MarginOrderComplete from '../../components/Margin/Order/Complete';

class MarginOrderCompleteContainer extends Component {
  render() {
    return (
      <MarginOrderComplete />
    );
  }
}

export default connect()(MarginOrderCompleteContainer);