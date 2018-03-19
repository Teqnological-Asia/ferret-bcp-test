import React from 'react';
import SidebarItem from './SidebarItem';

const SidebarList = ({name, isHighlight, items, currentPathName}) => (
  <dl className={isHighlight == true ? 'p-emergency' : ''}>
    <dt>
      <span className="icon-down-open-1"></span>{name}
    </dt>
    {items.map(item => (
      <SidebarItem name={item.name} href={item.href} currentPathName={currentPathName} />
    ))}
  </dl>
);

export default SidebarList;