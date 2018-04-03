import React from 'react';
import { Link } from 'react-router-dom';
import { matchPath } from '../../../utils';

const SidebarItem = ({item, currentPathName}) => {
  const path = currentPathName.replace(/\/+$/, '');
  const pathPatterns = item.subItems.concat(item.href);

  return (
    <dd className={matchPath(pathPatterns, path) ? 'is_current' : ''}>
      <Link to={item.href}>{item.name}</Link>
    </dd>
  );
};

export default SidebarItem;