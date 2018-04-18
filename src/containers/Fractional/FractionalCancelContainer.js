import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FractionalCancel from '../../components/Fractional/Cancel';
import {
  loadFractionalsShowRequest,
  cancelFractionalsRequest
} from '../../actions/fractional';

const mapStateToProps = (state) => {
  const { fractionals } = state.fractionalReducer;

  return { fractionals };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadFractionalsShowRequest, cancelFractionalsRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FractionalCancel);
