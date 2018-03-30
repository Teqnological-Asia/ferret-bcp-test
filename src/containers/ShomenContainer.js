import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Shomen from '../components/Authenticated/Shomen';
import { submitConfirmationRequest } from '../actions/auth';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    submitConfirmationRequest
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Shomen);