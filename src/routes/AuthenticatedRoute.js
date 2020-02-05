import React, { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import SidebarContainer from "../containers/SidebarContainer";
import HeaderContainer from "../containers/HeaderContainer";
import Footer from "../components/Authenticated/Footer";
import AlertMessageContainer from "../containers/AlertMessageContainer";
import ModalContainer from "../containers/ModalContainer";
import AutoLogoutContainer from "../containers/AutoLogoutContainer";

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const env = process.env.NODE_ENV;
  let version = ""
  if (env === "production") {
    const raw = process.env.REACT_APP_RELEASE_VERSION;
    version = raw.replace("release-prod-", "");
  } else {
    version = process.env.REACT_APP_RELEASE_VERSION;
  }

  return (
    <Route
      {...rest}
      render={props =>
        sessionStorage.getItem("token") !== null ? (
          <Fragment>
            <AlertMessageContainer />
            <ModalContainer />
            <AutoLogoutContainer />
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
                <Footer version={version} />
              </div>
            </div>
          </Fragment>
        ) : (
          <Redirect to={{ pathname: "/account/login" }} />
        )
      }
    />
  );
};

export default AuthenticatedRoute;
