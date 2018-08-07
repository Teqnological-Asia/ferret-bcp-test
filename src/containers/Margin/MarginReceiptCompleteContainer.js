import React, { Component } from 'react';
import { connect } from 'react-redux';
import MarginReceiptComplete from '../../components/Margin/Receipt/Complete';

class MarginReceiptCompleteContainer extends Component {
  render() {
    return (
      <MarginReceiptComplete {...this.props}/>
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
)(MarginReceiptCompleteContainer);