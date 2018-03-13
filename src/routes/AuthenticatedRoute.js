import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const isAuthenticated = true;
const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (isAuthenticated === true ?
        <div className="l-page">
          <Sidebar/>
          <div className="l-main">
            <Component {...props} />
          </div>
        </div> :
        <Redirect to={{ pathname: '/login' }} />
      )
    }
  />
);

export default AuthenticatedRoute;