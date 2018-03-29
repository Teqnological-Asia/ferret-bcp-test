import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AutoLogout from '../components/Authenticated/AutoLogout';
import { invalidTokenLogoutRequest } from '../actions/auth';

const mapStateToProps = (state) => {
  return {
    isInvalidToken: state.authReducer.isInvalidToken
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    invalidTokenLogoutRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AutoLogout);