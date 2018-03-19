import React, { Component } from 'react';
import HeadPanel from '../Unauthenticated/HeadPanel';

class Login extends Component {
  render() {
    return (
      <div className="p-container_panel">
        <HeadPanel />
        <div className="p-container_panel_body">
          <div className="p-container_panel_alert">
            <p>ログインIDまたはパスワードが誤っています。</p>
          </div>
          <form role="form" id="dummy" action="1.html" method="get">
            <div className="p-form-group">
              <label>ログインID</label>
              <input className="p-form-object p-form-object_middle" type="email" autoFocus placeholder="ログインID（メールアドレス）を入力"/>
            </div>
            <div className="p-form-group">
              <label>パスワード</label>
              <input className="p-form-object p-form-object_middle" type="password" autoComplete="off" placeholder="パスワードを入力"/>
            </div>
            <div className="p-form-group">
              <label>
                <input type="checkbox" value="" name=""/> ログイン状態を保存
              </label>
            </div>
            <input className="c-button c-button_block c-button_login" type="submit" value="ログインする"/>
          </form>
        </div>
        <div className="p-container_panel_foot">
          <a className="p-container_panel_link" href="login-1.html">パスワードをお忘れの方はこちら</a>
          <a className="p-container_panel_link" href="https://smartplus-sec.com" target="_blank">そのほかでお困りの方はこちら</a>
        </div>
      </div>
    )
  }
}

export default Login;