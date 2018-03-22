import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeadPanel from '../../Unauthenticated/HeadPanel';

class ReminderComplete extends Component {
  render() {
    return (
      <div className="p-container_panel">
        <HeadPanel />
        <div className="p-container_panel_body">
          <div className="p-container_panel_message">
            <p>入力いただいたメールアドレスに「ログインID確認用URL」が記載されたメールを送信いたしました。URLには有効期限がございますので、30分以内にご確認ください。</p>
          </div>
        </div>
        <div className="p-container_panel_foot">
          <Link className="c-button c-button_block c-button_login" to="/account/login">ログイン画面に戻る</Link>
        </div>
      </div>
    )
  }
}

export default ReminderComplete;