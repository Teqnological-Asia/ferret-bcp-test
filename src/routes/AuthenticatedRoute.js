import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import SidebarContainer from '../containers/SidebarContainer';
import Footer from '../components/Authenticated/Footer';

const isAuthenticated = true;
const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (isAuthenticated === true ?
        <div className="l-page">
          <SidebarContainer />
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
