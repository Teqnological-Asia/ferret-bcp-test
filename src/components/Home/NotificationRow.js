import React, { Component } from 'react';
import { formatDate } from '../../utils';

class NotificationRow extends Component {
  handleOpenModal = () => {
    this.props.createModal({title: 'Test', text: 'Text'});
  }

  render() {
    const { notification, createModal } = this.props;

    return (
      <div className="p-section_user_article">
        <div className="p-section_user_article_date">{formatDate(notification.last_update_time)}</div>
        <div className="p-section_user_article_title">
          <div className="p-modal">
            <label onClick={this.handleOpenModal}>{notification.title}</label>
          </div>
        </div>
      </div>
    );
  }
}

export default NotificationRow;