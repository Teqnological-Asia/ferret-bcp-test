import React, { Component } from 'react';
import NotificationRow from './NotificationRow';

class PrivateNotificationList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { notifications } = this.props;

    return (
      <div className="u-mt40p">
        <div className="p-section_header">
          <div className="p-section_header_title">お客様へのお知らせ</div>
        </div>
        <div className="p-section_user_articles">
          {notifications.map((notification, key) => (
            <NotificationRow key={key} notification={notification} />
          ))}
        </div>
      </div>
    );
  }
}

export default PrivateNotificationList;