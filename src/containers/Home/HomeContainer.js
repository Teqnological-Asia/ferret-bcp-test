import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../../components/Home';
import { loadProfileRequest, loadAccountsInfoRequest } from '../../actions/profile';
import { loadPrivateNotificationsRequest, clearPrivateNotifications } from '../../actions/privateNotification';
import { loadPublicNotificationsRequest, clearPublicNotifications } from '../../actions/publicNotification';
import { loadNotificationDetailRequest } from '../../actions/notificationDetail';
import { lbxConfirmRequest } from '../../actions/shomen';

const mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.profile,
    documents: state.profileReducer.documents,
    currentAccount: state.profileReducer.currentAccount,
    accounts: state.profileReducer.accounts,
    privateNotifications: {...state.privateNotificationReducer},
    publicNotifications: {...state.publicNotificationReducer}
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadProfileRequest,
    loadAccountsInfoRequest,
    loadPrivateNotificationsRequest,
    loadPublicNotificationsRequest,
    loadNotificationDetailRequest,
    clearPrivateNotifications,
    clearPublicNotifications,
    lbxConfirmRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
