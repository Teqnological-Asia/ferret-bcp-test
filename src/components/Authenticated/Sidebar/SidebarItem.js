import React from 'react';
import { Link } from 'react-router-dom';
import { matchPath } from '../../../utils';
import helpIcon from '../../../assets/images/help.svg';

const SidebarItem = ({item, currentPathName}) => {
  const {subItems, href, name, isDisabled, helpUrl} = item;
  const path = currentPathName.replace(/\/+$/, '');
  const pathPatterns = subItems.concat(href);
  const classNames = [
    ...(matchPath(pathPatterns, path) ? ['is_current'] : []),
    ...(isDisabled ? ['disabled'] : []),
    ...(helpUrl ? ['has-help-link'] : []),
  ];

  return (
    <dd className={classNames.join(' ')}>
      <Link to={href}>{name}</Link>
      {
        helpUrl ?
          <a href={helpUrl} target="_blank" className="help-link">
            <img src={helpIcon} alt="" style={{width:17, height:17}} />
          </a>
          : null
      }
    </dd>
  );
};

export default SidebarItem;