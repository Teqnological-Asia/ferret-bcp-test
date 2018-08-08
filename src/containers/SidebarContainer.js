import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sidebar from '../components/Authenticated/Sidebar';
import { logoutRequest } from '../actions/auth';
import { loadProfileRequest } from '../actions/profile';

const mapStateToProps = (state) => {
  return {
    currentPathName: state.routing.location.pathname,
    profile: state.profileReducer.profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logoutRequest,
    loadProfileRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);