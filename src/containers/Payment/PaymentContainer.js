import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Payment from '../../components/Payment';
import { loadCashTransferRequest, loadCashWithdrawalRequest } from '../../actions/payment';

const mapStateToProps = (state) => {
  const { cashTransfer, cashWithdrawal } = state.paymentReducer;

  return {
    cashTransfer,
    cashWithdrawal
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadCashTransferRequest,
    loadCashWithdrawalRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
