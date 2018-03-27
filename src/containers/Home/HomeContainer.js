import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../../components/Home';
import { loadProfileRequest } from '../../actions/profile';
import { loadPrivateNotificationsRequest } from '../../actions/privateNotification';
import { loadPublicNotificationsRequest } from '../../actions/publicNotification';

const mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.profile,
    privateNotifications: state.privateNotificationReducer.notifications,
    publicNotifications: state.publicNotificationReducer.notifications
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadProfileRequest,
    loadPrivateNotificationsRequest,
    loadPublicNotificationsRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);