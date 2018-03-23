import React, { Component } from 'react';

class PaymentWithdrawalComplete extends Component {
  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">出金 <b>予約受付</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>ご出金を受け付けいたしました。出金指示日の翌営業日に登録先金融機関口座にお振込いたします。</p>
          </div>
        </div>
        <div className="u-mt20p"><a className="c-button" href="3-5.html">入出金履歴へ</a></div>
      </div>
    );
  }
}

export default PaymentWithdrawalComplete;