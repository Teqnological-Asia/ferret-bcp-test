import React, { Component } from 'react';
import OrderForm from './OrderForm';

class PhysicalOrder extends Component {
  constructor(props) {
    super(props);

    this.stockCode = this.props.match.params.code;
  }

  onUnload = (event) => {
    event.returnValue = "unload";
  }

  componentDidMount() {
    this.props.loadStockDetailRequest(this.stockCode);
    this.props.loadPhysicalDetailRequest(this.stockCode);
    window.addEventListener("beforeunload", this.onUnload)
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.onUnload)
  }

  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">現物売却 <b>取引入力</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>ご注文を入力し確認画面へお進みください。</p>
          </div>
        </div>
        <OrderForm {...this.props} stockCode={this.stockCode} />
      </div>
    );
  }
}

export default PhysicalOrder;