import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AlertMessage from '../components/Authenticated/AlertMessage';
import { deleteError } from '../actions/error';

const mapStateToProps = (state) => {
  return {
    error: state.errorReducer.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteError
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertMessage);