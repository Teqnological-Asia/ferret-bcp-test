import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FractionalComplete extends Component {
  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">単元未満株式 <b>（売却 || 買取）受付</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>単元未満株式（売却 || 買取）を受け付けいたしました。</p>
          </div>
        </div>
        <div className="u-mt20p">
          <Link className="c-button" to="/account/fractional/cancel">
            単元未満株式 依頼予約確認へ
          </Link>
        </div>
      </div>
    );
  }
}

export default FractionalComplete;
