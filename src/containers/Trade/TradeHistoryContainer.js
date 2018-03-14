import React, { Component } from 'react';
import { connect } from 'react-redux';
import TradeHistory from '../../components/Trade/History';

class TradeHistoryContainer extends Component {
  render() {
    return (
      <TradeHistory />
    );
  }
}

export default connect()(TradeHistoryContainer);