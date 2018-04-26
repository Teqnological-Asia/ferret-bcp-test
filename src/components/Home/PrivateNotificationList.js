import React, { Component } from 'react';
import NotificationRow from './NotificationRow';
import LoadMoreNotification from './LoadMoreNotification';

class PrivateNotificationList extends Component {
  handleLoadMore = (e) => {
    this.props.loadPrivateNotificationsRequest(this.props.currentPage + 1);
  }

  render() {
    const { notifications, currentPage, totalPages, loadNotificationDetailRequest } = this.props;
    const showLoadMore = currentPage < totalPages;
    const loadMore = (
      showLoadMore && <LoadMoreNotification handleLoadMore={this.handleLoadMore} />
    );
    const renderNotifications = (notifications) => {
      if (notifications.length > 0) {
        return notifications.map((notification, key) => (
          <NotificationRow key={key} notification={notification} loadNotificationDetailRequest={loadNotificationDetailRequest} />
        ));
      } else {
        return <div className="load-more">【お知らせはありません。】</div>;
      }
    }

    return (
      <div className="u-mt40p">
        <div className="p-section_header">
          <div className="p-section_header_title">お客様へのお知らせ</div>
        </div>
        <div className="p-section_user_articles">
          {renderNotifications(notifications)}
          {loadMore}
        </div>
      </div>
    );
  }
}

export default PrivateNotificationList;