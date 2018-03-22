import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeadPanel from '../Unauthenticated/HeadPanel';

class Logout extends Component {
  render() {
    return (
      <div className="p-container_panel">
        <HeadPanel />
        <div className="p-container_panel_body">
          <p>ご利用ありがとうございました。</p>
        </div>
        <div className="p-container_panel_foot">
          <Link className="c-button c-button_block c-button_login" to="/account/login">ログイン画面に戻る</Link>
        </div>
      </div>
    )
  }
}

export default Logout;