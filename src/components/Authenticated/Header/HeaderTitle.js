import React from 'react';

const HeaderTitle = ({groupName, menuName}) => (
  <div className="p-pageTitle_head">
    <div className="p-pageTitle_title">{groupName}
      <span className="p-pageTitle_separate"></span>{menuName}
    </div>
  </div>
)

export default HeaderTitle;