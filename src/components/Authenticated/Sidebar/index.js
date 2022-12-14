import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SidebarList from './SidebarList';
import UserMenu from './UserMenu';
import conditionConfigMenu from '../configMenu';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  handleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { currentPathName, logoutRequest } = this.props;
    const openClass = this.state.isOpen ? 'open' : '';
    const mobileMenuClass = `p-nav_global_body ${openClass}`;
    let sidebarList = conditionConfigMenu();

    return (
      <div className="l-header">
        <nav className="p-nav_global">
          <div className="p-nav_global_head"><a className="p-menu" id="btn_menu" onClick={this.handleOpen}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><title>btn_menu</title><rect width="30" height="30" fill="none"/><path d="M24.5,9H5.5a1,1,0,0,1,0-2h19a1,1,0,0,1,0,2Z" fill="#fff"/><path d="M24.5,16H5.5a1,1,0,0,1,0-2h19a1,1,0,0,1,0,2Z" fill="#fff"/><path d="M24.5,23H5.5a1,1,0,0,1,0-2h19a1,1,0,0,1,0,2Z" fill="#fff"/></svg></a><Link to="/account" className="p-logo"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="24" viewBox="0 0 100 24"><title>smartplus</title><rect width="100" height="24" fill="none"/><path d="M8,3.4a1.11,1.11,0,0,1,1-1h5.62a1.11,1.11,0,0,1,1,1v1H18v-1A3.41,3.41,0,0,0,14.64,0H9a3.41,3.41,0,0,0-3.4,3.4v1H8Z" fill="#ff8900"/><path d="M20.25,15.66a1.11,1.11,0,0,0,1-1V14a1.12,1.12,0,0,0-1-1H3.4A3.41,3.41,0,0,1,0,9.53V9a3.41,3.41,0,0,1,3.4-3.4H22.47a1.16,1.16,0,0,1,1.19,1.13v.06A1.17,1.17,0,0,1,22.53,8H3.4a1,1,0,0,0-1,.94V9.7a1,1,0,0,0,.94,1H20.25a3.43,3.43,0,0,1,3.41,3.41v.68a3.42,3.42,0,0,1-3.41,3.4H1.19A1.21,1.21,0,0,1,0,17a1.3,1.3,0,0,1,1.19-1.34Z" fill="#ff8900"/><path d="M15.66,20.6a1.11,1.11,0,0,1-1,1H9a1.11,1.11,0,0,1-1-1v-1H5.62v1A3.41,3.41,0,0,0,9,24h5.62A3.41,3.41,0,0,0,18,20.6v-1H15.66Z" fill="#ff8900"/><path d="M37.36,15.5c-.19-.19-.38-.39-.38-.58a.83.83,0,0,1,.77-.78c.2,0,.39,0,.39.19a3.9,3.9,0,0,0,2.53.78c1,0,1.56-.39,1.56-1.17h0c0-.58-.39-1-1.95-1.36-1.94-.39-2.92-1-2.92-2.52h0c-.19-1.56,1.17-2.53,2.92-2.53A4.12,4.12,0,0,1,43,8.3c.2.2.39.39.39.59a.83.83,0,0,1-.77.78c-.2,0-.2,0-.39-.2a3.76,3.76,0,0,0-1.95-.58c-1,0-1.36.39-1.36,1h0c-.19.78.19,1,1.95,1.56,1.94.39,2.72,1,2.72,2.53h0c0,1.55-1.36,2.52-3.11,2.52A5.88,5.88,0,0,1,37.36,15.5Z" fill="#fff"/><path d="M47.28,8.3a.84.84,0,0,1,.78-.77h.19a1,1,0,0,1,.78.39L51.76,12l2.72-4.08c-.2-.2.19-.39.39-.39h.19a.84.84,0,0,1,.78.77v7.4a.78.78,0,0,1-1.56,0V10.44l-2.14,3.31c-.19.19-.38.39-.58.39s-.39-.2-.58-.39l-2.14-3.31V15.7a.78.78,0,0,1-1.56,0Z" fill="#fff"/><path d="M59.14,15.31l3.31-7.2c.19-.39.39-.58.78-.58h0a1.07,1.07,0,0,1,1,.58l3.31,7.2v.39a.84.84,0,0,1-.78.77c-.39,0-.58-.19-.78-.58l-.78-1.56H60.89l-.77,1.75c-.2.39-.39.39-.78.39a.84.84,0,0,1-.78-.77C59.14,15.7,59.14,15.5,59.14,15.31ZM64.78,13l-1.36-3.5L61.87,13Z" fill="#fff"/><path d="M70.81,8.5a.84.84,0,0,1,.78-.78H74.7a4.32,4.32,0,0,1,2.53.78A3,3,0,0,1,78,10.44h0a2.38,2.38,0,0,1-2,2.53l1.75,2.14c0,.2.2.39.2.58a.84.84,0,0,1-.78.78,1,1,0,0,1-.78-.39l-2.14-2.72H72.37v2.33a.78.78,0,0,1-1.56,0ZM74.7,12c1.17,0,1.75-.58,1.75-1.56h0c0-1-.58-1.36-1.75-1.36H72.56V12Z" fill="#fff"/><path d="M83.65,9.08H81.51a.84.84,0,0,1-.78-.78.84.84,0,0,1,.78-.77h5.83a.84.84,0,0,1,.78.77.84.84,0,0,1-.78.78H85.2V15.7a.78.78,0,0,1-.78.77.77.77,0,0,1-.77-.77Z" fill="#fff"/><path d="M94.34,12.78H92.59a.59.59,0,0,1,0-1.17h1.75V9.67a.78.78,0,0,1,1.56,0v1.75h1.75a.58.58,0,0,1,0,1.16H95.9v1.75a.78.78,0,0,1-1.56,0Z" fill="#fff"/></svg></Link><a className="p-faq" href="https://help.smartplus-sec.com/s/article/bcp" target="_blank" rel="noopener noreferrer">FAQ</a></div>
          <div className={mobileMenuClass} id="mobile_menu">
            {sidebarList.map((sidebar, key) => (
              <SidebarList name={sidebar.name} isHighlight={sidebar.is_highlight} items={sidebar.items} currentPathName={currentPathName} key={key} />
            ))}
            <UserMenu logoutRequest={logoutRequest}/>
          </div>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
