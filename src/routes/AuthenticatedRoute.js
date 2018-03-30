import React, { Fragment } from 'react';
import { Redirect, Route } from 'react-router-dom';
import SidebarContainer from '../containers/SidebarContainer';
import HeaderContainer from '../containers/HeaderContainer';
import Footer from '../components/Authenticated/Footer';
import AlertMessageContainer from '../containers/AlertMessageContainer';
import ModalContainer from '../containers/ModalContainer';
import AutoLogoutContainer from '../containers/AutoLogoutContainer';
import ShomenContainer from '../containers/ShomenContainer';

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      props => ((localStorage.getItem('token') !== null || sessionStorage.getItem('token') !== null) ?
        <Fragment>
          <AlertMessageContainer />
          <ModalContainer />
          <AutoLogoutContainer />
          <ShomenContainer />
          <div className="l-page">
            <SidebarContainer />
            <div className="l-main">
              <div className="l-main_body">
                <div className="l-contents">
                  <HeaderContainer />
                  <div className="l-contents_body">
                    <Component {...props} />
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </Fragment> :
        <Redirect to={{ pathname: '/account/login' }} />
      )
    }
  />
);

export default AuthenticatedRoute;
