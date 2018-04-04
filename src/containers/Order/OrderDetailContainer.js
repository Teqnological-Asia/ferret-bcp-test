import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrderDetail from '../../components/Order/Detail';
import { loadOrderDetailRequest } from '../../actions/orderDetail';

const mapStateToProps = (state) => {
  const reducer = state.orderDetailReducer;

  return {
    order: reducer.order,
    events: reducer.events
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadOrderDetailRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);