import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhysicalOrder from '../../components/Physical/Order';

class PhysicalOrderContainer extends Component {
  render() {
    return (
      <PhysicalOrder />
    );
  }
}

export default connect()(PhysicalOrderContainer);
