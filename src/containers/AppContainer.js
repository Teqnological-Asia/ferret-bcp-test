import React, { Component } from 'react';
import configRoutes from '../routes';

class AppContainer extends Component {
  render() {
    return (
      configRoutes()
    );
  }
}

export default AppContainer;