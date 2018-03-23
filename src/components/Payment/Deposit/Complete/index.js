import React, { Component } from 'react';

class PaymentDepositComplete extends Component {
  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">入金 <b>（オンライン即時入金）受付</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>オンライン即時入金を受け付けいたしました。</p>
          </div>
        </div>
        <div className="u-mt20p"><a className="c-button" href="3-5.html">入出金履歴へ</a></div>
      </div>
    );
  }
}

export default PaymentDepositComplete;
