import React, { Component } from 'react';

class ReportOutput extends Component {
  render() {
    return (
      <div className="l-contents">
        <div className="l-contents_head">
          <div className="p-pageTitle">
            <div className="p-pageTitle_head">
              <div className="p-pageTitle_title">手続き／報告書<span className="p-pageTitle_separate"></span>取引報告書印刷</div>
            </div>
            <div className="p-pageTitle_body">
                                <div className="p-nav_sub">
                                  <ul>
                                    <li><a href="2.html">入出金</a></li>
                                    <li><a href="2-1-1.html">単元未満株式売却</a></li>
                                    <li><a href="2-2.html">株式出庫</a></li>
                                    <li className="is_current"><a href="2-3.html">取引報告書印刷</a></li>
                                  </ul>
                                </div>
            </div>
          </div>
        </div>
        <div className="l-contents_body">
          <div className="l-contents_body_inner">
            <div className="u-mt40p">
              <div className="p-section_header">
                <div className="p-section_header_title">取引報告書印刷</div>
              </div>
            </div>
            <div className="u-mt20p">
              <p>DIR-BIの電子交付画面がiframeで埋め込まれます。</p>
              <iframe src="" width="100%" height="auto" style={{border: '2px solid grey'}}></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReportOutput;
