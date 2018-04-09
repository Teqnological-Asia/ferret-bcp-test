import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TradeHistory from '../../components/Trade/History';
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

export default connect(mapStateToProps, mapDispatchToProps)(TradeHistory);