import React, { Component } from 'react';
import HeadPanel from '../Unauthenticated/HeadPanel';

class Reminder extends Component {
  render() {
    return (
      <div className="p-container_panel">
        <HeadPanel />
        <div className="p-container_panel_body">
          <div className="p-container_panel_alert">
            <p>メールアドレスの形式をご確認ください。</p>
          </div>
          <div className="p-container_panel_message">
            <p>パスワード再設定用のURLが記載されたメールを送信します。登録しているメールアドレスを入力の上、「送信する」を押してください。</p>
          </div>
          <form role="form" id="" action="login-2.html" method="get">
            <div className="p-form-group">
              <label>メールアドレス</label>
              <input className="p-form-object" type="email" autoFocus placeholder="メールアドレスを入力" value="" name=""/>
            </div>
            <input className="c-button c-button_block c-button_login" type="submit" value="送信する"/>
          </form>
        </div>
      </div>
    )
  }
}

export default Reminder;