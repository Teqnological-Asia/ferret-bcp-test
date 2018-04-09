import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PhysicalOrderConfirm from '../../components/Physical/Order/Confirm';
import { completeOrderRequest } from '../../actions/physical';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    completeOrderRequest
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(PhysicalOrderConfirm);