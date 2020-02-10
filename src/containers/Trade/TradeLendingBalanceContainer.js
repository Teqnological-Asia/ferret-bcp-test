import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TradeLendingBalance from '../../components/Trade/LendingBalance';
import { loadTradeLendingBalanceRequest } from '../../actions/tradeLendindBalance';

const mapStateToProps = (state) => {
  const { tradeLendindBalance } = state.tradeLendingBalanceReducer;
  return {
    tradeLendindBalance,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadTradeLendingBalanceRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TradeLendingBalance);