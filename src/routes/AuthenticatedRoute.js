import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const isAuthenticated = true;
const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (isAuthenticated === true ?
        <div className="l-page">
          <Sidebar />
          <div className="l-main">
            <div className="l-main_body">
              <Component {...props} />
            </div>
            <Footer />
          </div>
        </div> :
        <Redirect to={{ pathname: '/login' }} />
      )
    }
  />
);

export default AuthenticatedRoute;
