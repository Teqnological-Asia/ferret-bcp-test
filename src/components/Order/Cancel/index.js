import React, { Component } from 'react';
import OrderDetailInfo from './OrderDetailInfo';

class OrderCancel extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadOrderDetailRequest(id);
  }

  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">注文 <b>取消確認</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>以下のご注文をご確認の上、「取り消しする」を押してください。</p>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="c-table-responsive">
            <OrderDetailInfo order={this.props.order}></OrderDetailInfo>
          </div>
        </div>
        <div className="u-mt20p"><a className="c-button c-button_delete" href="3-3-3.html">取り消しする</a></div>
      </div>
    )
  }
}

export default OrderCancel;