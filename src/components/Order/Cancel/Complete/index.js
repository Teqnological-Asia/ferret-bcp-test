import React, { Component } from 'react';

class OrderCancelComplete extends Component {
  render() {
    return (
      <div className="l-contents">
        <div className="l-contents_head">
          <div className="p-pageTitle">
            <div className="p-pageTitle_head">
              <div className="p-pageTitle_title">障害時取引メニュー<span className="p-pageTitle_separate"></span>注文照会</div>
            </div>
            <div className="p-pageTitle_body">
              <div className="p-nav_sub">
                <ul>
                  <li><a href="3-1.html">現物株式売却</a></li>
                  <li><a href="3-2.html">信用決済</a></li>
                  <li className="is_current"><a href="3-3.html">注文照会</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="l-contents_body">
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
        </div>
      </div>
    )
  }
}

export default OrderCancelComplete;