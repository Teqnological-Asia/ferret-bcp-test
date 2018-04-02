import React from 'react';

const LoadMoreNotification = ({handleLoadMore}) => (
  <div className="load-more">
    <a className="cursor" onClick={handleLoadMore}>読み込み</a>
  </div>
)

export default LoadMoreNotification;