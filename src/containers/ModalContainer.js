import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from '../components/Authenticated/Modal';
import { deleteModal } from '../actions/modal';

const mapStateToProps = (state) => {
  return {
    modal: state.modalReducer.modal
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteModal
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);