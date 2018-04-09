import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PhysicalOrderConfirm from '../../components/Physical/Order/Confirm';
import { createOrderRequest } from '../../actions/physical';

const mapStateToProps = (state) => {
  const { stockDetail, orderFormValues } = state.physicalReducer;

  return {
    stockDetail,
    orderFormValues
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createOrderRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PhysicalOrderConfirm);