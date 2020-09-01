import React, { Component } from 'react';
import * as qs from "qs";

class Callback extends Component {
  componentDidMount() {
    const {authz_code, user_id} = qs.parse(window.location.search, { ignoreQueryPrefix: true });
    if (authz_code && user_id) {
      this.props.loginRequest(authz_code, user_id);
    }
  }
  render() {
    return (
      <div className="p-container_panel" />
    )
  }
}

export default Callback