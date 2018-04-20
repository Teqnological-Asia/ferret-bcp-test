import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReportOutput from '../../components/Report/Output';
import { loadIframeUrlRequest } from '../../actions/report';

const mapStateToProps = (state) => {
  return {
    url: state.reportReducer.url
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadIframeUrlRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportOutput);