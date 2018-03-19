import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Footer from '../components/Unauthenticated/Footer';

const isAuthenticated = false;
const UnauthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (isAuthenticated === false ?
        <div className="p-container p-public">
          <Component {...props} />
          <Footer />
        </div> :
        <Redirect to={{ pathname: '/account' }} />
      )
    }
  />
);

export default UnauthenticatedRoute;