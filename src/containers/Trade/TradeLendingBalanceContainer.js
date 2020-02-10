import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TradeLendingBalance from '../../components/Trade/LendingBalance';
import { loadTradeLendingBalanceSuccess } from '../../actions/tradeLendindBalance';

const mapStateToProps = (state) => {
  const { tradeLendindBalance, currentPage, totalPages } = state.tradeHistoryReducer;

  return {
    tradeLendindBalance,
    currentPage,
    totalPages
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadTradeLendingBalanceSuccess
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TradeLendingBalance);