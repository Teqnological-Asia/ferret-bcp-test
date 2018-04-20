import React, { Component } from 'react';

class ReportOutput extends Component {
  componentDidMount() {
    this.props.loadIframeUrlRequest();
  }

  render() {
    const { url } = this.props;

    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">取引報告書印刷</div>
          </div>
        </div>
        <div className="u-mt20p">
          {url && <iframe src={url} title="trade-tax" width="100%" height="500px" scrolling="true" frameBorder="0" allowtransparency="yes" ></iframe>}
        </div>
      </div>
    );
  }
}

export default ReportOutput;