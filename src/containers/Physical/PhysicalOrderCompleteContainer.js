import { connect } from 'react-redux';
import PhysicalOrderComplete from '../../components/Physical/Order/Complete';

const mapStateToProps = (state) => {
  const { stockDetail, orderFormValues } = state.physicalReducer;

  return {
    stockDetail,
    orderFormValues
  };
};

export default connect(mapStateToProps)(PhysicalOrderComplete);