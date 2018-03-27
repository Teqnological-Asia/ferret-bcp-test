import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../../components/Home';
import { loadProfileRequest } from '../../actions/profile';

const mapStateToProps = (state) => {
  const reducer = state.profileReducer;

  return {
    error: reducer.error,
    profile: reducer.profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadProfileRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);