import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Shomen from '../components/Authenticated/Shomen';
import { submitConfirmationRequest } from '../actions/auth';
import { loadProfileDocumentRequest, lbxConfirmRequest } from '../actions/shomen';

const mapStateToProps = (state) => {
  return {
    documents: state.shomenReducer.documents,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    submitConfirmationRequest,
    loadProfileDocumentRequest,
    lbxConfirmRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Shomen);
