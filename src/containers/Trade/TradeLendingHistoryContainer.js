import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LendingHistory from '../../components/Trade/LendingHistory';
import { loadTradeHistoriesRequest } from '../../actions/tradeHistory';

const mapStateToProps = (state) => {
  const { tradeHistories, currentPage, totalPages } = state.tradeHistoryReducer;

  return {
    tradeHistories,
    currentPage,
    totalPages
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadTradeHistoriesRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LendingHistory);