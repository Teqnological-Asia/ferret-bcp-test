import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = ({group, activeMenuId}) => (
  <div className="p-pageTitle_body">
    <div className="p-nav_sub">
      <ul>
        {group.items.map((item, key) => (
          <li key={key} className={item.id === activeMenuId ? 'is_current' : ''}>
            <Link to={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default HeaderNav;