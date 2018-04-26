import React, { Component } from 'react';
import HeaderTitle from './HeaderTitle';
import HeaderNav from './HeaderNav';
import { findMenuInfoByPathName } from '../configMenu';

class Header extends Component {
  render() {
    const { currentPathName } = this.props;
    const menuInfo = findMenuInfoByPathName(currentPathName);

    if (menuInfo) {
      return (
        <div className="l-contents_head">
          <div className="p-pageTitle">
            <HeaderTitle groupName={menuInfo.group.name} menuName={menuInfo.name} />
            <HeaderNav group={menuInfo.group} activeMenuId={menuInfo.id} />
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="l-contents_head">
          <div className="p-pageTitle">
            <div className="p-pageTitle_head">
              <div className="p-pageTitle_title">スマートプラス お客さまWEB</div>
            </div>
            <div className="p-pageTitle_body">
              <div className="p-nav_sub">
                <ul>
                  <li className="is_current"><a>お知らせ</a></li>
                  <li><a href="https://smartplus-sec.com" target="_blank" rel="noopener noreferrer">カスタマーサポート</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Header;
