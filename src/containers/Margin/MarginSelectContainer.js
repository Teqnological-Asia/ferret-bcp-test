import React, { Component } from 'react';
import { connect } from 'react-redux';
import MarginSelect from '../../components/Margin/Select';
import { bindActionCreators } from 'redux';
import { loadStockMarginRequest, changeStockMarginPosition } from '../../actions/margin'
import { loadStockDetailRequest } from '../../actions/physical';


class MarginSelectContainer extends Component {
  render() {
    return (
      <MarginSelect {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => ({
  stockMargin: state.marginReducer.stock,
  buttonType: state.marginReducer.buttonType,
  stock: state.physicalReducer.stockDetail
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadStockMarginRequest,
    changeStockMarginPosition,
    loadStockDetailRequest
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarginSelectContainer);