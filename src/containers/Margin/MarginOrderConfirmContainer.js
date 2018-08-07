import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MarginOrderConfirm from '../../components/Margin/Order/Confirm';
import {} from '../../actions/margin'

class MarginOrderConfirmContainer extends Component {
  render() {
    return (
      <MarginOrderConfirm {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => ({
  stockDetail: state.physicalReducer.stockDetail,
  buttonType: state.marginReducer.buttonType,
  marginOrderSendParams: state.marginReducer.marginOrderSendParams,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarginOrderConfirmContainer);