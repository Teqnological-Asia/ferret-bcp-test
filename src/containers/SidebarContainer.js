import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/Authenticated/Sidebar';

class SidebarContainer extends Component {
  render() {
    return (
      <Sidebar currentPathName={this.props.currentPathName} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentPathName: state.routing.location.pathname
  };
};

export default connect(mapStateToProps)(SidebarContainer);