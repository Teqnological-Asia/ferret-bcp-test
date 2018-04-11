import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PaymentWithdrawal from '../../components/Payment/Withdrawal';
import { withdrawRequest } from '../../actions/payment';

const mapStateToProps = (state) => {
  const { cashWithdrawal, amount } = state.paymentReducer;

  return {
    cashWithdrawal,
    amount
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    withdrawRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentWithdrawal);
