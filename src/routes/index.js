import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';

import HomeContainer from '../containers/Home/HomeContainer';
import TradeHistoryContainer from '../containers/Trade/TradeHistoryContainer';
import TradeTaxContainer from '../containers/Trade/TradeTaxContainer';
import PaymentHistoryContainer from '../containers/Payment/PaymentHistoryContainer';
import PaymentCancelContainer from '../containers/Payment/PaymentCancelContainer';
import PaymentCancelCompleteContainer from '../containers/Payment/PaymentCancelCompleteContainer';
import PaymentContainer from '../containers/Payment/PaymentContainer';
import PaymentDepositContainer from '../containers/Payment/PaymentDepositContainer';
import PaymentDepositConfirmContainer from '../containers/Payment/PaymentDepositConfirmContainer';
import PaymentDepositCompleteContainer from '../containers/Payment/PaymentDepositCompleteContainer';
import PaymentWithdrawalContainer from '../containers/Payment/PaymentWithdrawalContainer';
import PaymentWithdrawalCompleteContainer from '../containers/Payment/PaymentWithdrawalCompleteContainer';
import FractionalSellContainer from '../containers/Fractional/FractionalSellContainer';
import FractionalCompleteContainer from '../containers/Fractional/FractionalCompleteContainer';
import FractionalClameContainer from '../containers/Fractional/FractionalClameContainer';
import FractionalCancelContainer from '../containers/Fractional/FractionalCancelContainer';
import FractionalCancelCompleteContainer from '../containers/Fractional/FractionalCancelCompleteContainer';
import DeliveryContainer from '../containers/Delivery/DeliveryContainer';
import DeliveryCompleteContainer from '../containers/Delivery/DeliveryCompleteContainer';
import DeliveryCancelContainer from '../containers/Delivery/DeliveryCancelContainer';
import DeliveryCancelCompleteContainer from '../containers/Delivery/DeliveryCancelCompleteContainer';
import ReportOutputContainer from '../containers/Report/ReportOutputContainer';
import PhysicalContainer from '../containers/Physical/PhysicalContainer';
import PhysicalOrderContainer from '../containers/Physical/PhysicalOrderContainer';
import PhysicalOrderConfirmContainer from '../containers/Physical/PhysicalOrderConfirmContainer';
import PhysicalOrderCompleteContainer from '../containers/Physical/PhysicalOrderCompleteContainer';

import BalanceContainer from '../containers/Balance/BalanceContainer';
import MarginContainer from '../containers/Margin/MarginContainer';
import MarginSelectContainer from '../containers/Margin/MarginSelectContainer';
import MarginOrderContainer from '../containers/Margin/MarginOrderContainer';
import MarginOrderConfirmContainer from '../containers/Margin/MarginOrderConfirmContainer';
import MarginOrderCompleteContainer from '../containers/Margin/MarginOrderCompleteContainer';
import MarginReceiptContainer from '../containers/Margin/MarginReceiptContainer';
import MarginReceiptCompleteContainer from '../containers/Margin/MarginReceiptCompleteContainer';
import MarginDeliveryContainer from '../containers/Margin/MarginDeliveryContainer';
import MarginDeliveryCompleteContainer from '../containers/Margin/MarginDeliveryCompleteContainer';
import OrderContainer from '../containers/Order/OrderContainer';
import OrderCancelContainer from '../containers/Order/OrderCancelContainer';
import OrderCancelCompleteContainer from '../containers/Order/OrderCancelCompleteContainer';
import OrderDetailContainer from '../containers/Order/OrderDetailContainer';
import LoginContainer from '../containers/Login/LoginContainer';
import LogoutContainer from '../containers/Logout/LogoutContainer';
import ReminderContainer from '../containers/Reminder/ReminderContainer';
import ReminderCompleteContainer from '../containers/Reminder/ReminderCompleteContainer';

export default function configRoutes() {
  return (
    <Fragment>
      <AuthenticatedRoute exact path="/account" component={HomeContainer} />
      <AuthenticatedRoute exact path="/account/balance" component={BalanceContainer} />
      <AuthenticatedRoute exact path="/account/trade/history" component={TradeHistoryContainer} />
      <AuthenticatedRoute exact path="/account/trade/tax" component={TradeTaxContainer} />
      <AuthenticatedRoute exact path="/account/payment/history/" component={PaymentHistoryContainer} />
      <AuthenticatedRoute exact path="/account/payment/cancel/" component={PaymentCancelContainer} />
      <AuthenticatedRoute exact path="/account/payment/cancel/complete/" component={PaymentCancelCompleteContainer} />
      <AuthenticatedRoute exact path="/account/payment/" component={PaymentContainer} />
      <AuthenticatedRoute exact path="/account/payment/deposit/" component={PaymentDepositContainer} />
      <AuthenticatedRoute exact path="/account/payment/deposit/confirm/" component={PaymentDepositConfirmContainer} />
      <AuthenticatedRoute exact path="/account/payment/deposit/complete/" component={PaymentDepositCompleteContainer} />
      <AuthenticatedRoute exact path="/account/payment/withdrawal/" component={PaymentWithdrawalContainer} />
      <AuthenticatedRoute exact path="/account/payment/withdrawal/complete/" component={PaymentWithdrawalCompleteContainer} />
      <AuthenticatedRoute exact path="/account/fractional/sell/" component={FractionalSellContainer} />
      <AuthenticatedRoute exact path="/account/fractional/complete/" component={FractionalCompleteContainer} />
      <AuthenticatedRoute exact path="/account/fractional/clame/" component={FractionalClameContainer} />
      <AuthenticatedRoute exact path="/account/fractional/cancel/" component={FractionalCancelContainer} />
      <AuthenticatedRoute exact path="/account/fractional/cancel/complete/" component={FractionalCancelCompleteContainer} />
      <AuthenticatedRoute exact path="/account/delivery/" component={DeliveryContainer} />
      <AuthenticatedRoute exact path="/account/delivery/complete/" component={DeliveryCompleteContainer} />
      <AuthenticatedRoute exact path="/account/delivery/cancel/" component={DeliveryCancelContainer} />
      <AuthenticatedRoute exact path="/account/delivery/cancel/complete/" component={DeliveryCancelCompleteContainer} />
      <AuthenticatedRoute exact path="/account/report/output/" component={ReportOutputContainer} />
      <AuthenticatedRoute exact path="/account/physical/" component={PhysicalContainer} />
      <AuthenticatedRoute exact path="/account/physical/order/" component={PhysicalOrderContainer} />
      <AuthenticatedRoute exact path="/account/physical/order/confirm/" component={PhysicalOrderConfirmContainer} />
      <AuthenticatedRoute exact path="/account/physical/order/complete/" component={PhysicalOrderCompleteContainer} />

      <AuthenticatedRoute exact path="/account/margin" component={MarginContainer} />
      <AuthenticatedRoute exact path="/account/margin/select" component={MarginSelectContainer} />
      <AuthenticatedRoute exact path="/account/margin/order" component={MarginOrderContainer} />
      <AuthenticatedRoute exact path="/account/margin/order/confirm" component={MarginOrderConfirmContainer} />
      <AuthenticatedRoute exact path="/account/margin/order/complete" component={MarginOrderCompleteContainer} />
      <AuthenticatedRoute exact path="/account/margin/receipt" component={MarginReceiptContainer} />
      <AuthenticatedRoute exact path="/account/margin/receipt/complete" component={MarginReceiptCompleteContainer} />
      <AuthenticatedRoute exact path="/account/margin/delivery" component={MarginDeliveryContainer} />
      <AuthenticatedRoute exact path="/account/margin/delivery/complete" component={MarginDeliveryCompleteContainer} />
      <AuthenticatedRoute exact path="/account/order" component={OrderContainer} />
      <AuthenticatedRoute exact path="/account/order/cancel" component={OrderCancelContainer} />
      <AuthenticatedRoute exact path="/account/order/cancel/complete" component={OrderCancelCompleteContainer} />
      <AuthenticatedRoute exact path="/account/order/detail" component={OrderDetailContainer} />

      <UnauthenticatedRoute exact path="/account/login" component={LoginContainer} />
      <UnauthenticatedRoute exact path="/account/logout" component={LogoutContainer} />
      <UnauthenticatedRoute exact path="/account/reminder" component={ReminderContainer} />
      <UnauthenticatedRoute exact path="/account/reminder/complete" component={ReminderCompleteContainer} />
      <Route exact path="/" render={() => (<Redirect to="/account" />) } />
    </Fragment>
  );
}