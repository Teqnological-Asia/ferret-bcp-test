import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <div className="u-mt20p">
          <Link className="c-button" to="/account/order">注文照会へ</Link>
          </div>
      </div>
    )
  }
}

export default OrderCancelComplete;