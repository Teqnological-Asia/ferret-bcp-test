import React, { Component } from 'react';
import HeadPanel from '../Unauthenticated/HeadPanel';
import LoginFooter from './LoginFooter';

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
        <LoginFooter/>
      </div>
    )
  }
}

export default Login;