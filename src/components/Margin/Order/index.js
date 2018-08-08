import React, { Component } from 'react';
import OrderForm from './OrderForm';
import { transactionByButtonType } from '../common';

class MarginOrder extends Component {
  constructor(props) {
    super(props)
    this.stockCode = this.props.match.params.code
  }

  componentDidMount() {
    if (this.props.stockDetail == null) {
      this.props.history.push('/account/margin')
      return null
    }
    this.props.initMarginOrderForm()
  }
  render() {
    const { buttonType } = this.props
    const transaction = transactionByButtonType(buttonType)
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">信用返済（{transaction}）<b>注文入力</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>ご注文を入力し確認画面へお進みください。</p>
          </div>
        </div>
        <OrderForm {...this.props} stockCode={this.stockCode} />
      </div>
    )
  }
}

export default MarginOrder;