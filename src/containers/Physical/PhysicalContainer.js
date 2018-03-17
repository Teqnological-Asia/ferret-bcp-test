import React, { Component } from 'react';
import { connect } from 'react-redux';
import Physical from '../../components/Physical';

class PhysicalContainer extends Component {
  render() {
    return (
      <Physical />
    );
  }
}

export default connect()(PhysicalContainer);
