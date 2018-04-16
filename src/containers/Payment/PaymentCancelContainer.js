import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PaymentCancel from '../../components/Payment/Cancel';
import { loadPaymentCancelListRequest } from '../../actions/paymentCancel';

const mapStateToProps = (state) => {
  return {
    payments: state.paymentCancelReducer.payments
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadPaymentCancelListRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentCancel);