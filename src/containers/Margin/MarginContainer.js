import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Margin from '../../components/Margin';
import { loadMarginRequest, clickMarginButton } from '../../actions/margin'

class MarginContainer extends Component {
  componentDidMount() {
    this.props.loadMarginRequest()
  }
  render() {
    return (
      <Margin {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => ({
  marginPositions: state.marginReducer.marginPositions,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadMarginRequest,
    clickMarginButton
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarginContainer);