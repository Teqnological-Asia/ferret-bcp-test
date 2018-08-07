import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sidebar from '../components/Authenticated/Sidebar';
import { logoutRequest } from '../actions/auth';

const mapStateToProps = (state) => {
  return {
    currentPathName: state.routing.location.pathname,
    profile: state.profileReducer.profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logoutRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);