import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MarginOrder from '../../components/Margin/Order';
import { initMarginOrderForm, newMarginOrder } from '../../actions/margin'

class MarginOrderContainer extends Component {
  render() {
    return (
      <MarginOrder {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => ({
  stockDetail: state.physicalReducer.stockDetail,
  buttonType: state.marginReducer.buttonType,
  orderFormValues: state.marginReducer.marginOrderForm,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    initMarginOrderForm,
    newMarginOrder
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarginOrderContainer);