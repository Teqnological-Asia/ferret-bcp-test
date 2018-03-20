import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({name, href, activeHrefs, currentPathName}) => (
  <dd className={(activeHrefs.concat(href).includes(currentPathName.replace(/\/+$/, '')) == true) ? 'is_current' : ''}>
    <Link to={href}>{name}</Link>
  </dd>
);

export default SidebarItem;