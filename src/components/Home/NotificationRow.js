import React, { Component } from 'react';
import { formatDate } from '../../utils';

class NotificationRow extends Component {
  handleOpenDetail = (id) => {
    this.props.loadNotificationDetailRequest(id);
  }

  render() {
    const { notification } = this.props;

    return (
      <div className="p-section_user_article">
        <div className="p-section_user_article_date">{formatDate(notification.last_update_time)}</div>
        <div className="p-section_user_article_title">
          <div className="p-modal">
            <label onClick={() => this.handleOpenDetail(notification.notification_id)}>{notification.title}</label>
          </div>
        </div>
      </div>
    );
  }
}

export default NotificationRow;
