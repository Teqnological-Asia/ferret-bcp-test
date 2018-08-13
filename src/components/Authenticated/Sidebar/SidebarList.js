import React from 'react';
import SidebarItem from './SidebarItem';

const SidebarList = ({name, isHighlight, items, currentPathName}) => (
  <dl className={isHighlight === true ? 'p-emergency' : ''}>
    { name ?
      <dt>
        <span className="icon-down-open-1"></span>{name}
      </dt>
      : null
    }
    {items.map((item, key) => (
      <SidebarItem item={item} currentPathName={currentPathName} key={key} />
    ))}
  </dl>
);

export default SidebarList;