import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginCallback from '../../components/Login/Callback';
import { loginRequest } from '../../actions/auth';

const mapStateToProps = (state) => {
  return {
    error: state.authReducer.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginCallback);