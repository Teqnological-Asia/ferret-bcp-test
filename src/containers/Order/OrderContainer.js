import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Order from '../../components/Order';
import { loadOrdersRequest } from '../../actions/order';

const mapStateToProps = (state) => {
  const { orders, currentPage, totalPages } = state.orderReducer;

  return {
    orders,
    currentPage,
    totalPages
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadOrdersRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);