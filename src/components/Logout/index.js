import React, { Component } from 'react';
import UnauthenticatedHeadPanel from '../Unauthenticated/HeadPanel';

class Logout extends Component {
  render() {
    return (
      <div className="p-container_panel">
        <UnauthenticatedHeadPanel />
        <div className="p-container_panel_body">
          <p>ご利用ありがとうございました。</p>
        </div>
        <div className="p-container_panel_foot">
          <a className="c-button c-button_block c-button_login" href="login.html">ログイン画面に戻る</a>
        </div>
      </div>
    )
  }
}

export default Logout;