import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PhysicalOrder from '../../components/Physical/Order';
import { loadStockDetailRequest, loadPhysicalDetailRequest, confirmOrderRequest } from '../../actions/physical';

const mapStateToProps = (state) => {
  const physicalReducer = state.physicalReducer;

  return {
    stockDetail: physicalReducer.stockDetail,
    physicalDetail: physicalReducer.physicalDetail
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadStockDetailRequest,
    loadPhysicalDetailRequest,
    confirmOrderRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PhysicalOrder);