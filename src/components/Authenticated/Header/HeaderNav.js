import React from 'react';
import { Link } from 'react-router-dom';
import helpIcon from "../../../assets/images/help.svg";

const HeaderNav = ({group, activeMenuId}) => {
  const classNames = (item) => [
    ...(item.id === activeMenuId ? ['is_current'] : []),
    ...(item.isDisabled ? ['disabled'] : []),
  ];
  return (
    <div className="p-pageTitle_body">
      <div className="p-nav_sub">
        <ul>
          {group.items.map((item, key) => (
            <li key={key} className={classNames(item).join(' ')}>
              <Link to={item.href}>{item.name}</Link>
              {
                item.helpUrl ?
                  <a
                    href={item.helpUrl} target="_blank" className="help-link"
                    style={{marginLeft: 5, pointerEvents: 'auto', verticalAlign: 'middle', padding: 0}}
                  >
                    <img src={helpIcon} alt="" style={{width:17, height:17}}/>
                  </a>
                  : null
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default HeaderNav;