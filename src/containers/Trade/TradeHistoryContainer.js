import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TradeHistory from '../../components/Trade/History';
import { loadTradeHistoriesRequest } from '../../actions/tradeHistory';
import { createError } from '../../actions/error';

const mapStateToProps = (state) => {
  const reducer = state.tradeHistoryReducer;

  return {
    error: reducer.error,
    tradeHistories: reducer.tradeHistories,
    currentPage: reducer.currentPage,
    totalPages: reducer.totalPages
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadTradeHistoriesRequest,
    createError
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TradeHistory);
