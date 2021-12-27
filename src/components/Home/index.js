import React, { Component } from 'react';
import ProfileDetail from './ProfileDetail';
import PublicNotificationList from './PublicNotificationList';
import PrivateNotificationList from './PrivateNotificationList';
import Shomen from './Shomen';
import {UserAccount} from "@Finatext/baas-common-bcp";
class Home extends Component {
  componentDidMount() {
    this.props.loadProfileRequest();
    this.props.loadAccountsInfoRequest();
  }

  componentWillUnmount() {
    this.props.clearPrivateNotifications();
    this.props.clearPublicNotifications();
  }

  render() {
    const { profile, documents, accounts, currentAccount,
      privateNotifications, publicNotifications,
      loadPrivateNotificationsRequest, loadPublicNotificationsRequest,
      loadNotificationDetailRequest, lbxConfirmRequest, getDeliverStatus, hasFinishReading
    } = this.props;

    return (
      <div className="l-contents_body_inner">
        <Shomen documents={documents} lbxConfirmRequest={lbxConfirmRequest} getDeliverStatus={getDeliverStatus
        } hasFinishReading={hasFinishReading}/>
        <ProfileDetail profile={profile} />
        <UserAccount accounts={accounts} currentAccount={currentAccount}/>
        <PublicNotificationList
          notifications={publicNotifications.notifications}
          currentPage={publicNotifications.currentPage}
          totalPages={publicNotifications.totalPages}
          loadPublicNotificationsRequest={loadPublicNotificationsRequest}
          loadNotificationDetailRequest={loadNotificationDetailRequest}
        />
        <PrivateNotificationList
          notifications={privateNotifications.notifications}
          currentPage={privateNotifications.currentPage}
          totalPages={privateNotifications.totalPages}
          loadPrivateNotificationsRequest={loadPrivateNotificationsRequest}
          loadNotificationDetailRequest={loadNotificationDetailRequest}
        />
      </div>
    );
  }
}

export default Home;
