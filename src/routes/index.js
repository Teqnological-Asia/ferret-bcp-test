import React, { Fragment } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import HomeContainer from '../containers/Home/HomeContainer';
import LoginContainer from '../containers/LoginContainer';
import AuthenticatedRoute from './AuthenticatedRoute';

export default function configRoutes() {
  return (
    <Fragment>
      <BrowserRouter basename="/account">
        <AuthenticatedRoute exact path="/" component={HomeContainer} />
      </BrowserRouter>
      <Route exact path="/login" component={LoginContainer} />
    </Fragment>
  );
}