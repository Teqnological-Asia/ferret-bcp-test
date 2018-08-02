import React, { Component } from 'react';
import { connect } from 'react-redux';
import MarginSelect from '../../components/Margin/Select';
import { bindActionCreators } from 'redux';
import { loadStockMarginRequest } from '../../actions/margin'
import { loadStockDetailRequest } from '../../actions/physical';


class MarginSelectContainer extends Component {
  render() {
    return (
      <MarginSelect {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => ({
  stockMargin: state.marginReducer.stock
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadStockMarginRequest,
    loadStockDetailRequest
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarginSelectContainer);