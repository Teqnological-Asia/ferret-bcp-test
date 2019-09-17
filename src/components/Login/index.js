import React, { Component } from 'react';
import HeadPanel from '../Unauthenticated/HeadPanel';
import LoginFooter from './LoginFooter';
import FormError from '../Unauthenticated/FormError';
import { validateEmail } from '../../utils';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      type: 'password',
      errors: []
    }
  }

  validate = (email, password) => {
    const errors = [];

    if (!email || (!validateEmail(email))) {
      errors.push('メールアドレスを正しく入力してください。');
    }

    return errors;
  }

  handleUserInput = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({[name]: value});
  }

  handleDisplayPassword = (e) => {
    const type = e.target.checked ? 'text' : 'password';
    this.setState({type});
  }

  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const errors = this.validate(email, password);

    this.setState({errors: errors});
    if (errors.length > 0) return;
    this.props.loginRequest(email, password);
  }

  render() {
    const { email, password, type, errors } = this.state;
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
              <input name="password" className="p-form-object p-form-object_middle" type={type} placeholder="パスワードを入力" value={password} onChange={this.handleUserInput}/>
            </div>
            <div className="p-form-group">
              <label>
                <input name="showPassword" type="checkbox" onChange={this.handleDisplayPassword}/> パスワードを表示する
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