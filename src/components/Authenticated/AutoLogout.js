import React, { Component } from 'react';

class AutoLogout extends Component {
  handleExpiredTokenLogout = () => {
    this.props.expiredTokenLogoutRequest();
  }

  render() {
    const { isExpiredToken } = this.props;

    if (isExpiredToken) {
      return (
        <div className="p-modal">
          <input className="p-modal_isopen" id="modal_open_logout" type="radio" name="modal_switch_logout" defaultChecked/>
          <div className="p-modal_overlay_logout"></div>
          <div className="p-modal_window">
            <div className="p-modal_window_contents">
              <div className="p-modal_window_msg_logout">
                <p>一定時間操作がなかったため、ログアウトしました。<br/>お手数ですが、再度ログインを行ってください。</p>
                <div className="u-mt20p">
                  <a className="c-button" onClick={this.handleExpiredTokenLogout}>ログイン画面に戻る</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  }
}

export default AutoLogout;