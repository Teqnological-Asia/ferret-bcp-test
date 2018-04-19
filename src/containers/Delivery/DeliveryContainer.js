import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Delivery from '../../components/Delivery';
import {
  loadDeliveriesIndexRequest
} from '../../actions/delivery';

const mapStateToProps = (state) => {
  const { deliveries } = state.deliveryReducer;

  return { deliveries };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadDeliveriesIndexRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Delivery);
