import React, { Component } from 'react';

class PaymentCancelComplete extends Component {
  render() {
    return (
      <div className="l-contents">
        <div className="l-contents_head">
          <div className="p-pageTitle">
            <div className="p-pageTitle_head">
              <div className="p-pageTitle_title">資産状況<span className="p-pageTitle_separate"></span>入出金履歴</div>
            </div>
            <div className="p-pageTitle_body">
              <div className="p-nav_sub">
                <ul>
                  <li><a href="3.html">口座余力</a></li>
                  <li><a href="3-4.html">取引履歴</a></li>
                  <li><a href="3-4-1.html">特定口座譲渡益税／配当</a></li>
                  <li className="is_current"><a href="3-5.html">入出金履歴</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="l-contents_body">
          <div className="l-contents_body_inner">
            <div className="u-mt40p">
              <div className="p-section_header">
                <div className="p-section_header_title">出金 <b>取消受付</b></div>
              </div>
            </div>
            <div className="u-mt20p">
              <div className="p-section_lead">
                <p>お取消しを受け付けいたしました。</p>
              </div>
            </div>
            <div className="u-mt20p"><a className="c-button" href="3-5.html">入出金履歴へ</a></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentCancelComplete;
