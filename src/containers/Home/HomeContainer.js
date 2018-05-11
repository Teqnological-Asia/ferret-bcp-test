import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../../components/Home';
import { loadProfileRequest } from '../../actions/profile';
import { loadPrivateNotificationsRequest, clearPrivateNotifications } from '../../actions/privateNotification';
import { loadPublicNotificationsRequest, clearPublicNotifications } from '../../actions/publicNotification';
import { loadNotificationDetailRequest } from '../../actions/notificationDetail';
import { lbxConfirmRequest } from '../../actions/shomen';

const mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.profile,
    documents: state.profileReducer.documents,
    privateNotifications: {...state.privateNotificationReducer},
    publicNotifications: {...state.publicNotificationReducer}
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadProfileRequest,
    loadPrivateNotificationsRequest,
    loadPublicNotificationsRequest,
    loadNotificationDetailRequest,
    clearPrivateNotifications,
    clearPublicNotifications,
    lbxConfirmRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
