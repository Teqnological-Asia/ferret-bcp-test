import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import MarginOrder from '../../components/Margin/Order';

class MarginOrderContainer extends Component {
  render() {
    return (
      <MarginOrder {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => ({
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
)(MarginOrderContainer);