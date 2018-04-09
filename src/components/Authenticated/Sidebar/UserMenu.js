import React, { Component } from 'react';

class UserMenu extends Component {
  handleLogout = () => {
    this.props.logoutRequest();
  }

  render() {
    const kanjiUsername = sessionStorage.getItem('name') || localStorage.getItem('name');

    return (
      <div className="p-nav_usermenu">
        <div className="icon-user">{kanjiUsername} 様</div>
        <a className="cursor" onClick={this.handleLogout}>ログアウト</a>
      </div>
    );
  }
}

export default UserMenu;