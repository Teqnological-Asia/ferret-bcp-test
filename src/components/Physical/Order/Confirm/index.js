import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import OrderInfo from '../OrderInfo';

class PhysicalOrderConfirm extends Component {
  constructor(props) {
    super(props);

    this.stockCode = this.props.match.params.code;
  }

  onUnload = (event) => {
    event.returnValue = "unload";
  }

  componentDidMount() {
    window.addEventListener("beforeunload", this.onUnload)
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.onUnload)
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.createOrderRequest(this.stockCode);
  }

  render() {
    const { stockDetail, orderFormValues } = this.props;

    if (stockDetail == null || orderFormValues == null) return <Redirect to={{ pathname: `/account/physical/${this.stockCode}/order` }} />;

    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">現物売却 <b>取引確認</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>内容をご確認いただき「発注する」を押すとご注文が確定します。</p>
          </div>
        </div>
        <OrderInfo {...this.props} />
        <div className="u-mt20p">
          <Link className="c-button c-button_cancel" to={`/account/physical/${this.stockCode}/order`}>入力へ戻る</Link>
          <a className="c-button" onClick={this.handleSubmit}>発注する</a>
        </div>
      </div>
    );
  }
}

export default PhysicalOrderConfirm;