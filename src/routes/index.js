import React from 'react';
import { Route } from 'react-router-dom';
import DashboardContainer from '../containers/DashboardContainer';
import LoginContainer from '../containers/LoginContainer';
import AuthenticatedRoute from './AuthenticatedRoute';

export default function configRoutes() {
  return (
    <div>
      <AuthenticatedRoute exact path="/" component={DashboardContainer} />
      <Route exact path="/login" component={LoginContainer} />
    </div>
  );
}