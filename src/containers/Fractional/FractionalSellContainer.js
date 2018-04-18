import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FractionalSell from '../../components/Fractional/Sell';
import {
  loadFractionalsRequest,
  buySellFractionalRequest
} from '../../actions/fractional';

const mapStateToProps = (state) => {
  const { fractionals } = state.fractionalReducer;

  return { fractionals };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadFractionalsRequest, buySellFractionalRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FractionalSell);
