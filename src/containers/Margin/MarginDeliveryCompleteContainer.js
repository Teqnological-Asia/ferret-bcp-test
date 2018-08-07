import React, { Component } from 'react';
import { connect } from 'react-redux';
import MarginDeliveryComplete from '../../components/Margin/Delivery/Complete';

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

export default connect(
  mapStateToProps
)(MarginDeliveryCompleteContainer);