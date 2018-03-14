import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import HomeContainer from '../containers/Home/HomeContainer';
import LoginContainer from '../containers/LoginContainer';
import TradeHistoryContainer from '../containers/Trade/TradeHistoryContainer';
import TradeTaxContainer from '../containers/Trade/TradeTaxContainer';

export default function configRoutes() {
  return (
    <Fragment>
      <AuthenticatedRoute exact path="/account" component={HomeContainer} />
      <AuthenticatedRoute exact path="/account/trade/history" component={TradeHistoryContainer} />
      <AuthenticatedRoute exact path="/account/trade/tax" component={TradeTaxContainer} />
      <Route exact path="/login" component={LoginContainer} />
    </Fragment>
  );
}