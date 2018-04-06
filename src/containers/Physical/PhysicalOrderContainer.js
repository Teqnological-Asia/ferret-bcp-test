import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PhysicalOrder from '../../components/Physical/Order';
import { loadStockDetailRequest, loadPhysicalDetailRequest } from '../../actions/physical';

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
    loadPhysicalDetailRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PhysicalOrder);