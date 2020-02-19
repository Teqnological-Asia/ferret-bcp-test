import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LendingHistory from '../../components/Trade/LendingHistory';
import { loadTradeLendingHistoriesRequest } from '../../actions/tradeLendingHistory';
import { loadProfileRequest } from '../../actions/profile';

const mapStateToProps = (state) => {
  const { tradeLendingHistories, pageSize, currentPage, totalPages } = state.tradeLendingHistoryReducer;
  const {profile} = state.profileReducer;
  return {
    tradeLendingHistories,
    pageSize,
    currentPage,
    totalPages,
    profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadTradeLendingHistoriesRequest,
    loadProfileRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LendingHistory);