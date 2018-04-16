import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PaymentHistory from '../../components/Payment/History';
import { loadPaymentHistoriesRequest } from '../../actions/paymentHistory';

const mapStateToProps = (state) => {
  return {
    paymentHistories: state.paymentHistoryReducer.paymentHistories
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadPaymentHistoriesRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentHistory);