import React, { Component } from 'react';
import NotificationRow from './NotificationRow';
import LoadMoreNotification from './LoadMoreNotification';

class PublicNotificationList extends Component {
  handleLoadMore = (e) => {
    this.props.loadPublicNotificationsRequest(this.props.currentPage + 1);
  }

  render() {
    const { notifications, currentPage, totalPages, loadNotificationDetailRequest } = this.props;
    const showLoadMore = currentPage < totalPages;
    const loadMore = (
      showLoadMore && <LoadMoreNotification handleLoadMore={this.handleLoadMore} />
    );

    return (
      <div className="u-mt40p">
        <div className="p-section_header">
          <div className="p-section_header_title">当社からのお知らせ</div>
        </div>
        <div className="p-section_user_articles">
          {notifications.map((notification, key) => (
            <NotificationRow key={key} notification={notification} loadNotificationDetailRequest={loadNotificationDetailRequest} />
          ))}
          {loadMore}
        </div>
      </div>
    );
  }
}

export default PublicNotificationList;