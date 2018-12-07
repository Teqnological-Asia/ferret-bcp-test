import React, { Fragment } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Footer from '../components/Unauthenticated/Footer';
import AntiSocialContainer from '../containers/AntiSocialContainer';

const UnauthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => ((sessionStorage.getItem('token') !== null) ?
        <Redirect to={{ pathname: '/account' }} /> :
        <Fragment>
        <AntiSocialContainer />
        <div className="p-container">
          <Component {...props} />
          <Footer />
        </div>
        </Fragment>
      )
    }
  />
);

export default UnauthenticatedRoute;