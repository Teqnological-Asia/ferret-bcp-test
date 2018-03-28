import React, { Component } from 'react';
import NotificationRow from './NotificationRow';
import LoadMoreNotification from './LoadMoreNotification';

class PrivateNotificationList extends Component {
  constructor(props) {
    super(props);
  }

  handleLoadMore = (e) => {
    this.props.loadPrivateNotificationsRequest(this.props.currentPage + 1);
  }

  render() {
    const { notifications, currentPage, totalPages } = this.props;
    const showLoadMore = currentPage < totalPages;
    const loadMore = (
      showLoadMore && <LoadMoreNotification handleLoadMore={this.handleLoadMore} />
    );

    return (
      <div className="u-mt40p">
        <div className="p-section_header">
          <div className="p-section_header_title">お客様へのお知らせ</div>
        </div>
        <div className="p-section_user_articles">
          {notifications.map((notification, key) => (
            <NotificationRow key={key} notification={notification} />
          ))}
          {loadMore}
        </div>
      </div>
    );
  }
}

export default PrivateNotificationList;