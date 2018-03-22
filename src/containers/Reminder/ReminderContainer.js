import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Reminder from '../../components/Reminder';
import { sendReminderRequest } from '../../actions/reminder';

const mapStateToProps = (state) => {
  return {
    error: state.reminderReducer.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    sendReminderRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Reminder);