import React, { Component } from 'react';
import HeadPanel from '../Unauthenticated/HeadPanel';
import FormError from '../Unauthenticated/FormError';
import { validateEmail } from '../../utils';

class Reminder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      errors: []
    }
  }

  validate = (email) => {
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

  handleSendReminder = (e) => {
    e.preventDefault();
    const { email } = this.state;
    const errors = this.validate(email);

    this.setState({errors: errors});
    if (errors.length > 0) return;
    this.props.sendReminderRequest(email);
  }

  render() {
    const { email, errors } = this.state;

    return (
      <div className="p-container_panel">
        <HeadPanel />
        <div className="p-container_panel_body">
          {errors.length > 0 && (
            <FormError errors={errors}/>
          )}
          <div className="p-container_panel_message">
            <p>パスワード再設定用のURLが記載されたメールを送信します。登録しているメールアドレスを入力の上、「送信する」を押してください。</p>
          </div>
          <form onSubmit={(e) => this.handleSendReminder(e)}>
            <div className="p-form-group">
              <label>メールアドレス</label>
              <input name="email" className="p-form-object" type="text" autoFocus placeholder="メールアドレスを入力" value={email} onChange={this.handleUserInput}/>
            </div>
            <input className="c-button c-button_block c-button_login" type="submit" value="送信する" disabled={!email}/>
          </form>
        </div>
      </div>
    )
  }
}

export default Reminder;