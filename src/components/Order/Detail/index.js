import React, { Component } from 'react';
import OrderDetailHeader from './OrderDetailHeader';
import OrderDetailEvent from './OrderDetailEvent';

class OrderDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadOrderDetailRequest(id);
  }

  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">取引 <b>詳細</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <OrderDetailHeader order={this.props.order} />
        </div>
        <div className="u-mt20p">
          <div className="c-table-responsive">
            <OrderDetailEvent events={this.props.events} />
          </div>
        </div>
      </div>
    )
  }
}

export default OrderDetail;