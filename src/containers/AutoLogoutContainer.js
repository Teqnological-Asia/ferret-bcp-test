import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AutoLogout from '../components/Authenticated/AutoLogout';
import { expiredTokenLogoutRequest } from '../actions/auth';

const mapStateToProps = (state) => {
  return {
    isExpiredToken: state.authReducer.isExpiredToken
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    expiredTokenLogoutRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AutoLogout);