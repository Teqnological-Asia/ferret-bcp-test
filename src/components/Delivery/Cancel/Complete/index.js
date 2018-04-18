import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DeliveryCancelComplete extends Component {
  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">株式出庫 <b>取消受付</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>お取消しを受け付けいたしました。</p>
          </div>
        </div>
        <div className="u-mt20p">
          <Link className="c-button" to="/account/delivery/cancel">
            株式出庫予約確認へ
          </Link>
        </div>
      </div>
    );
  }
}

export default DeliveryCancelComplete;
