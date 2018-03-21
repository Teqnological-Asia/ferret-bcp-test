import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../../components/Login';
import { loginRequest } from '../../actions/auth';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);