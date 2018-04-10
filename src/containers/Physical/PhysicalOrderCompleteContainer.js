import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createOrderSuccess } from '../../actions/physical';
import PhysicalOrderComplete from '../../components/Physical/Order/Complete';

const mapStateToProps = (state) => {
  const { stockDetail, orderFormValues } = state.physicalReducer;

  return {
    stockDetail,
    orderFormValues
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createOrderSuccess
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PhysicalOrderComplete);