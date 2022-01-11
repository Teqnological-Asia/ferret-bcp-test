import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import AppContainer from './containers/AppContainer';
import './styles/application.scss';
import './styles/custom.scss';
import 'babel-polyfill';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer/>
    </ConnectedRouter>
  </Provider>,
  target
)