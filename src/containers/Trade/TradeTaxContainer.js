import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TradeTax from '../../components/Trade/Tax';
import { loadIframeUrlRequest } from '../../actions/tradeTax';

const mapStateToProps = (state) => {
  return {
    url: state.tradeTaxReducer.url
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadIframeUrlRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TradeTax);