import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LendingHistory from '../../components/Trade/LendingHistory';
import { loadTradeLendingHistoriesRequest } from '../../actions/tradeLendingHistory';

const mapStateToProps = (state) => {
  const { tradeLendingHistories, pageSize, currentPage, totalPages } = state.tradeLendingHistoryReducer;

  return {
    tradeLendingHistories,
    pageSize,
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