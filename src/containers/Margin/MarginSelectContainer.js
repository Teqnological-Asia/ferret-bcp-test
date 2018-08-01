import React, { Component } from 'react';
import { connect } from 'react-redux';
import MarginSelect from '../../components/Margin/Select';
import { bindActionCreators } from 'redux';
import { loadStockMarginRequest } from '../../actions/margin'

class MarginSelectContainer extends Component {
  render() {
    return (
      <MarginSelect {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => ({
  marginPositions: state.marginReducer.marginPositions
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadStockMarginRequest
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarginSelectContainer);