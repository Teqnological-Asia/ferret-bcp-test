import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../../components/Home';
import { loadProfileRequest } from '../../actions/profile';
import { loadPrivateNotificationsRequest } from '../../actions/privateNotification';
import { loadPublicNotificationsRequest } from '../../actions/publicNotification';
import { loadNotificationDetailRequest } from '../../actions/notificationDetail';

const mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.profile,
    privateNotifications: {
      notifications: state.privateNotificationReducer.notifications,
      currentPage: state.privateNotificationReducer.currentPage,
      totalPages: state.privateNotificationReducer.totalPages
    },
    publicNotifications: {
      notifications: state.publicNotificationReducer.notifications,
      currentPage: state.publicNotificationReducer.currentPage,
      totalPages: state.publicNotificationReducer.totalPages
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadProfileRequest,
    loadPrivateNotificationsRequest,
    loadPublicNotificationsRequest,
    loadNotificationDetailRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);