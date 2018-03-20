import React from 'react';

const SidebarItem = ({name, href, activeHrefs, currentPathName}) => (
  <dd className={(activeHrefs.concat(href).includes(currentPathName.replace(/\/+$/, '')) == true) ? 'is_current' : ''}>
    <a href={href}>{name}</a>
  </dd>
);

export default SidebarItem;