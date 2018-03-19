import React from 'react';

const SidebarItem = ({name, href, currentPathName}) => (
  <dd><a href={href}>{name}</a></dd>
);

export default SidebarItem;