import React, { Component } from 'react';

class UserMenu extends Component {
  handleLogout = () => {
    this.props.logoutRequest();
  }

  render() {
    return (
      <div className="p-nav_usermenu">
        <div className="icon-user">須磨 太郎 様</div>
        <a className="cursor" onClick={this.handleLogout}>ログアウト</a>
      </div>
    );
  }
}

export default UserMenu;