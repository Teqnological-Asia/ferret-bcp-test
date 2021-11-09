import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadTradeCashHistoriesRequest } from '../../actions/tradeCashHistory';
import TradeCashHistory from "../../components/Trade/CashHistory";

const mapStateToProps = (state) => {
  const { tradeCashHistories, currentPage, totalPages } = state.tradeCashHistoryReducer;

  return {
    tradeCashHistories,
    currentPage,
    totalPages
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadTradeCashHistoriesRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TradeCashHistory);