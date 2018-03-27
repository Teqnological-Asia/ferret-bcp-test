import React from 'react';
import { formatDate } from '../../utils';

const NotificationRow = ({notification}) => {
  return (
    <div className="p-section_user_article">
      <div className="p-section_user_article_date">{formatDate(notification.last_update_time)}</div>
      <div className="p-section_user_article_title">
        <div className="p-modal">
          <input className="p-modal_isopen" id="modal_open_5" type="radio" name="modal_switch_5"/>
          <label for="modal_open_5">{notification.title}</label>
          <input className="p-modal_overlay" id="modal_close-overlay_5" type="radio" name="modal_switch_5"/>
          <label for="modal_close-overlay_5"></label>
          <input className="p-modal_closebutton" id="modal_close-button_5" type="radio" name="modal_switch_5"/>
          <label for="modal_close-button_5"></label>
          <div className="p-modal_window">
            <div className="p-modal_window_contents">
              <div className="p-modal_window_head"><strong>当社からのお知らせ：只今障害が発生しています。5</strong></div>
              <div className="p-modal_window_body">
                <p>只今障害が発生しています。5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationRow;