import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';

import HomeContainer from '../containers/Home/HomeContainer';
import TradeHistoryContainer from '../containers/Trade/TradeHistoryContainer';
import TradeTaxContainer from '../containers/Trade/TradeTaxContainer';
import PaymentHistoryContainer from '../containers/Payment/PaymentHistoryContainer';
import PaymentCancelContainer from '../containers/Payment/PaymentCancelContainer';
import PaymentCancelConfirmContainer from '../containers/Payment/PaymentCancelConfirmContainer';
import PaymentCancelCompleteContainer from '../containers/Payment/PaymentCancelCompleteContainer';
import PaymentContainer from '../containers/Payment/PaymentContainer';
import PaymentWithdrawalContainer from '../containers/Payment/PaymentWithdrawalContainer';
import PaymentWithdrawalCompleteContainer from '../containers/Payment/PaymentWithdrawalCompleteContainer';
import FractionalCompleteContainer from '../containers/Fractional/FractionalCompleteContainer';
import FractionalClameContainer from '../containers/Fractional/FractionalClameContainer';
import FractionalCancelContainer from '../containers/Fractional/FractionalCancelContainer';
import FractionalCancelCompleteContainer from '../containers/Fractional/FractionalCancelCompleteContainer';
import ReportOutputContainer from '../containers/Report/ReportOutputContainer';
import BalanceContainer from '../containers/Balance/BalanceContainer';
import OrderContainer from '../containers/Order/OrderContainer';
import OrderCancelContainer from '../containers/Order/OrderCancelContainer';
import OrderCancelCompleteContainer from '../containers/Order/OrderCancelCompleteContainer';
import OrderDetailContainer from '../containers/Order/OrderDetailContainer';
import LoginCallbackContainer from '../containers/Login/LoginCallbackContainer';
import LoginContainer from '../containers/Login/LoginContainer';
import LogoutContainer from '../containers/Logout/LogoutContainer';
import LoadingContainer from '../containers/Loading/LoadingContainer';
import CloseAccountContainer from '../containers/CloseAccount/CloseAccountContainer';
import LendingBalanceContainer from '../containers/Trade/TradeLendingBalanceContainer'
import TradeLendingHistory from '../containers/Trade/TradeLendingHistoryContainer';
import { AppHelmet } from '../components/Helmet';
import TradeCashHistoryContainer from "../containers/Trade/TradeCashHistoryContainer";

export const routes = [
  {
    path: '/account',
    component: HomeContainer,
    isAuthenticated: true
  },
  {
    path: '/account/balance',
    component: BalanceContainer,
    isAuthenticated: true
  },
  {
    path: '/account/trade/history',
    component: TradeHistoryContainer,
    isAuthenticated: true
  },
  {
    path: '/account/trade/cash/history',
    component: TradeCashHistoryContainer,
    isAuthenticated: true
  },
  {
    path: '/account/trade/lendinghistory',
    component: TradeLendingHistory,
    isAuthenticated: true
  },
  {
    path: '/account/trade/tax',
    component: TradeTaxContainer,
    isAuthenticated: true
  },
  {
    path: '/account/trade/lendingbalance',
    component: LendingBalanceContainer,
    isAuthenticated: true
  },
  {
    path: '/account/payment/history',
    component: PaymentHistoryContainer,
    isAuthenticated: true
  },
  {
    path: '/account/payment/cancel',
    component: PaymentCancelContainer,
    isAuthenticated: true
  },
  {
    path: '/account/payment/:id/cancel/confirm',
    component: PaymentCancelConfirmContainer,
    isAuthenticated: true
  },
  {
    path: '/account/payment/:id/cancel/complete',
    component: PaymentCancelCompleteContainer,
    isAuthenticated: true
  },
  {
    path: '/account/payment',
    component: PaymentContainer,
    isAuthenticated: true
  },
  {
    path: '/account/payment/withdrawal',
    component: PaymentWithdrawalContainer,
    isAuthenticated: true
  },
  {
    path: '/account/payment/withdrawal/complete',
    component: PaymentWithdrawalCompleteContainer,
    isAuthenticated: true
  },
  {
    path: '/account/fractional/complete',
    component: FractionalCompleteContainer,
    isAuthenticated: true
  },
  {
    path: '/account/fractional/clame',
    component: FractionalClameContainer,
    isAuthenticated: true
  },
  {
    path: '/account/fractional/cancel',
    component: FractionalCancelContainer,
    isAuthenticated: true
  },
  {
    path: '/account/fractional/cancel/complete',
    component: FractionalCancelCompleteContainer,
    isAuthenticated: true
  },
  {
    path: '/account/report/output',
    component: ReportOutputContainer,
    isAuthenticated: true
  },
  {
    path: '/account/order',
    component: OrderContainer,
    isAuthenticated: true
  },
  {
    path: '/account/order/:id/cancel',
    component: OrderCancelContainer,
    isAuthenticated: true
  },
  {
    path: '/account/order/:id/cancel/complete',
    component: OrderCancelCompleteContainer,
    isAuthenticated: true
  },
  {
    path: '/account/order/:id/detail',
    component: OrderDetailContainer,
    isAuthenticated: true
  },
  {
    path: '/account/close-account',
    component: CloseAccountContainer,
    isAuthenticated: true
  },
  {
    path: '/account/login',
    component: LoginContainer,
    isAuthenticated: false
  },
  {
    path: '/account/login/callback',
    component: LoginCallbackContainer,
    isAuthenticated: false
  },
  {
    path: '/account/logout',
    component: LogoutContainer,
    isAuthenticated: false
  }
];

export default function configRoutes() {
  const routeComponents = routes.map((route, key) => {
    if (route.isAuthenticated) {
      return <AuthenticatedRoute exact path={route.path} component={route.component} key={key} />;
    } else {
      return <UnauthenticatedRoute exact path={route.path} component={route.component} key={key} />;
    }
  });

  const openaccountRoute = props => {
    if (document.referrer) {
      sessionStorage.setItem('prevPath', document.referrer)
    }
    sessionStorage.setItem('path', props.location.pathname)
    window.location.href = '/op/index.html'
    return null
  }

  return (
    <Fragment>
      <AppHelmet/>
      <LoadingContainer/>
      {routeComponents}
      <Route exact path="/" render={() => (<Redirect to="/account" />) } />
      <Route path="/openaccount" component={openaccountRoute} />
    </Fragment>
  );
}