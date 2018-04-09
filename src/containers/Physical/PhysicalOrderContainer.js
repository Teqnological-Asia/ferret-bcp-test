import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PhysicalOrder from '../../components/Physical/Order';
import { loadStockDetailRequest, loadPhysicalDetailRequest, saveOrderFormRequest } from '../../actions/physical';

const mapStateToProps = (state) => {
  const { stockDetail, physicalDetail, orderFormValues } = state.physicalReducer;

  return {
    stockDetail,
    physicalDetail,
    orderFormValues
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadStockDetailRequest,
    loadPhysicalDetailRequest,
    saveOrderFormRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PhysicalOrder);