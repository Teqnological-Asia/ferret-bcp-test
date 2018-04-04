import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrderCancel from '../../components/Order/Cancel';
import { loadOrderDetailRequest } from '../../actions/orderDetail';
import { cancelOrderRequest } from '../../actions/order';

const mapStateToProps = (state) => {
  const reducer = state.orderDetailReducer;

  return {
    order: reducer.order
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadOrderDetailRequest,
    cancelOrderRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderCancel);