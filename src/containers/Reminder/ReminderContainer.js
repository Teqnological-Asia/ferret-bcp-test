import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Reminder from '../../components/Reminder';
import { sendReminderRequest } from '../../actions/reminder';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    sendReminderRequest
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Reminder);