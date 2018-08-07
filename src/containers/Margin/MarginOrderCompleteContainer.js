import React, { Component } from 'react';
import { connect } from 'react-redux';
import MarginOrderComplete from '../../components/Margin/Order/Complete';

class MarginOrderCompleteContainer extends Component {
  render() {
    return (
      <MarginOrderComplete {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => ({
  stockDetail: state.physicalReducer.stockDetail,
  buttonType: state.marginReducer.buttonType,
  marginOrderSendParams: state.marginReducer.marginOrderSendParams,
})

export default connect(
  mapStateToProps
)(MarginOrderCompleteContainer);