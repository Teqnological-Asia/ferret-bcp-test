import React, { Component } from 'react';
import { connect } from 'react-redux';
import MarginSelect from '../../components/Margin/Select';

class MarginSelectContainer extends Component {
  render() {
    return (
      <MarginSelect />
    );
  }
}

export default connect()(MarginSelectContainer);