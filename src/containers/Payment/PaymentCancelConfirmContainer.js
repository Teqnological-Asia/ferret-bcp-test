import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PaymentCancelConfirm from '../../components/Payment/Cancel/Confirm';
import { cancelCashTransferRequest } from '../../actions/paymentCancel';

const mapStateToProps = (state, ownProps) => {
  const payment = state.paymentCancelReducer.payments.find((payment) => {
    return payment.id === ownProps.match.params.id;
  });

  return {
    payment
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    cancelCashTransferRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentCancelConfirm)