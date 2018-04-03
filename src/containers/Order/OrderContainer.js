import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Order from '../../components/Order';
import { loadOrdersRequest } from '../../actions/order';

const mapStateToProps = (state) => {
  const reducer = state.orderReducer;

  return {
    orders: reducer.orders,
    currentPage: reducer.currentPage,
    totalPages: reducer.totalPages
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadOrdersRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);