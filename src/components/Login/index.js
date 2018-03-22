import React, { Component } from 'react';
import HeadPanel from '../Unauthenticated/HeadPanel';
import LoginFooter from './LoginFooter';
import FormError from '../Unauthenticated/FormError';
import { validateEmail, validatePassword } from '../../utils';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      remember: false,
      errors: []
    }
  }

  validate = (email, password) => {
    const errors = [];

    if (!email || (!validateEmail(email))) {
      errors.push('メールアドレスを正しく入力してください。');
    }

    if (!password || password.length < 8 || (!validatePassword(password))) {
      errors.push('パスワードが条件を満たしていません。');
    }

    return errors;
  }

  handleUserInput = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({[name]: value});
  }

  handleLogin = (e) => {
    e.preventDefault();
    const { email, password, remember } = this.state;
    const errors = this.validate(email, password);

    this.setState({errors: errors});
    if (errors.length > 0) return;
    this.props.loginRequest(email, password, remember);
  }

  render() {
    const { email, password, remember, errors } = this.state;
    const { error } = this.props;

    if (errors.length === 0 && error) {
      errors.push(error);
    }

    return (
      <div className="p-container_panel">
        <HeadPanel />
        <div className="p-container_panel_body">
          {errors.length > 0 && (
            <FormError errors={errors}/>
          )}
          <form onSubmit={(e) => this.handleLogin(e)}>
            <div className="p-form-group">
              <label>ログインID</label>
              <input name="email" className="p-form-object p-form-object_middle" type="text" autoFocus placeholder="ログインID（メールアドレス）を入力" value={email} onChange={this.handleUserInput}/>
            </div>
            <div className="p-form-group">
              <label>パスワード</label>
              <input name="password" className="p-form-object p-form-object_middle" type="password" autoComplete="new-password" placeholder="パスワードを入力" value={password} onChange={this.handleUserInput}/>
            </div>
            <div className="p-form-group">
              <label>
                <input name="remember" type="checkbox" checked={remember} onChange={this.handleUserInput}/> ログイン状態を保存
              </label>
            </div>
            <input className="c-button c-button_block c-button_login" type="submit" value="ログインする" disabled={!email || !password}/>
          </form>
        </div>
        <LoginFooter/>
      </div>
    )
  }
}

export default Login;