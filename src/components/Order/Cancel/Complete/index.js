import React, { Component } from 'react';

class OrderCancelComplete extends Component {
  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">注文 <b>取消受付</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>お取消しを受け付けいたしました。</p>
          </div>
        </div>
        <div className="u-mt20p"><a className="c-button" href="3-3.html">注文照会へ</a></div>
      </div>
    )
  }
}

export default OrderCancelComplete;