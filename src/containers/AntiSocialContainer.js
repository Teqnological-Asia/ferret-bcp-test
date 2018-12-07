import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AntiSocial from '../components/Unauthenticated/AntiSocial';
import { setAntiSocial } from '../actions/auth';

const mapStateToProps = (state) => {
  return {
    isAntiSocial: state.authReducer.isAntiSocial
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setAntiSocial
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AntiSocial);