import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DeliveryCancel from '../../components/Delivery/Cancel';
import {
  loadDeliveriesRequest,
  cancelDeliveriesRequest
} from '../../actions/delivery';

const mapStateToProps = (state) => {
  const { deliveries } = state.deliveryReducer;

  return { deliveries };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadDeliveriesRequest, cancelDeliveriesRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryCancel);
