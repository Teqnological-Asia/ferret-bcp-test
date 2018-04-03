import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TradeHistory from '../../components/Trade/History';
import { loadTradeHistoriesRequest } from '../../actions/tradeHistory';

const mapStateToProps = (state) => {
  const reducer = state.tradeHistoryReducer;

  return {
    tradeHistories: reducer.tradeHistories,
    currentPage: reducer.currentPage,
    totalPages: reducer.totalPages
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadTradeHistoriesRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TradeHistory);
