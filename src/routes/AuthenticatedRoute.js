import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const isAuthenticated = true;
const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (isAuthenticated === true ? (<div><Component {...props} /></div>) : <Redirect to={{ pathname: '/login' }} />)
    }
  />
);

export default AuthenticatedRoute;