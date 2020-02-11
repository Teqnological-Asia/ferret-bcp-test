import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LendingHistory from '../../components/Trade/LendingHistory';
import { loadTradeLendingHistoriesRequest } from '../../actions/tradeLendingHistory';

const mapStateToProps = (state) => {
  const { tradeLendingHistories, currentPage, totalPages } = state.tradeLendingHistoryReducer;

  return {
    tradeLendingHistories,
    currentPage,
    totalPages
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadTradeLendingHistoriesRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LendingHistory);