import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import DashboardContainer from '../containers/dashboard';

export default function configRoutes() {
  return (
    <div>
      <Route exact path="/" component={DashboardContainer} />
    </div>
  );
}