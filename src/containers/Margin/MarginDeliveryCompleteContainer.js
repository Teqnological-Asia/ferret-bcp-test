import React, { Component } from 'react';
import { connect } from 'react-redux';
import MarginDeliveryComplete from '../../components/Margin/Delivery/Complete';
import { bindActionCreators } from 'redux';

class MarginDeliveryCompleteContainer extends Component {
  render() {
    return (
      <MarginDeliveryComplete {...this.props}/>
    );
  }
}
const mapStateToProps = (state) => ({
  marginOrder: state.marginReducer.marginOrder,
  stockDetail: state.physicalReducer.stockDetail,
  buttonType: state.marginReducer.buttonType
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarginDeliveryCompleteContainer);