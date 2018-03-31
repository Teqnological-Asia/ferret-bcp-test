import React, { Component } from 'react';

class UserMenu extends Component {
  handleLogout = () => {
    this.props.logoutRequest();
  }

  getUserNameKanji = () => {
    return sessionStorage.getItem('name') || localStorage.getItem('name');
  }

  render() {
    return (
      <div className="p-nav_usermenu">
        <div className="icon-user">{this.getUserNameKanji()} 様</div>
        <a className="cursor" onClick={this.handleLogout}>ログアウト</a>
      </div>
    );
  }
}

export default UserMenu;