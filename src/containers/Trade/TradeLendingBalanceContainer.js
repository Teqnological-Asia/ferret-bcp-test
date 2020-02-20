import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TradeLendingBalance from '../../components/Trade/LendingBalance';
import { loadTradeLendingBalanceRequest } from '../../actions/tradeLendingBalance';

const mapStateToProps = (state) => {
  const { tradeLendingBalance, attributes } = state.tradeLendingBalanceReducer;
  return {
    tradeLendingBalance,
    attributes
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadTradeLendingBalanceRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TradeLendingBalance);