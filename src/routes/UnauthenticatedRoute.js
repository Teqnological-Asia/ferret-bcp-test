import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Footer from '../components/Unauthenticated/Footer';

const UnauthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => ((sessionStorage.getItem('token') !== null) ?
        <Redirect to={{ pathname: '/account' }} /> :
        <div className="p-container">
          <Component {...props} />
          <Footer />
        </div>
      )
    }
  />
);

export default UnauthenticatedRoute;