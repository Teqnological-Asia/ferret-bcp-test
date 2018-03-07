import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import DashboardContainer from '../containers/dashboard';
import LoginContainer from '../containers/login';
import AuthenticatedRoute from './AuthenticatedRoute';

export default function configRoutes() {
  return (
    <div>
      <AuthenticatedRoute exact path="/" component={DashboardContainer} />
      <Route exact path="/login" component={LoginContainer} />
    </div>
  );
}