import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import OrderInfo from '../OrderInfo';

class PhysicalOrderComplete extends Component {
  componentWillUnmount() {
    this.props.createOrderSuccess();
  }

  render() {
    const { stockDetail, orderFormValues } = this.props;

    if (stockDetail == null || orderFormValues == null) return <Redirect to={{ pathname: `/account/physical` }} />;

    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">現物売却 <b>取引受付</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>ご注文を受け付けいたしました。</p>
          </div>
        </div>
        <OrderInfo {...this.props} />
        <div className="u-mt20p">
          <Link className="c-button" to="/account/order">注文照会へ</Link>
          <Link className="c-button" to="/account/physical">現物株式売却へ</Link>
        </div>
      </div>
    );
  }
}

export default PhysicalOrderComplete;