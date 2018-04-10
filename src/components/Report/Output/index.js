import React, { Component } from 'react';

class ReportOutput extends Component {
  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">取引報告書印刷</div>
          </div>
        </div>
        <div className="u-mt20p">
          <p>DIR-BIの電子交付画面がiframeで埋め込まれます。</p>
          <iframe title="report" src="" width="100%" height="auto" style={{border: '2px solid grey'}}></iframe>
        </div>
      </div>
    );
  }
}

export default ReportOutput;
