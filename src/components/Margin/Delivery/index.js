import React, { Component } from 'react';
import { transactionByButtonType } from '../common';
import { Link } from 'react-router-dom'

class MarginDelivery extends Component {
  constructor(props) {
    super(props)
    this.confirm = this.confirm.bind(this)
  }

  confirm() {
    const side = this.props.buttonType.split('_')[1]
    this.props.sendMarginSwap(this.props.match.params.code, side)
  }

  render() {
    const { marginOrder, stockDetail, buttonType } = this.props
    if (stockDetail == null || marginOrder == null || buttonType == null) {
      this.props.history.push('/account/margin')
      return null
    }
    const transaction = transactionByButtonType(buttonType)
    console.log(marginOrder)

    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">信用返済（反対売買） <b>注文入力</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>内容をご確認いただき「発注する」を押すとご注文が確定されます。</p>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="c-table-responsive">
            <div className="c-table_inputs">
              <table>
                <tbody>
                  <tr>
                    <th>銘柄コード</th>
                    <td>{stockDetail.code}/{stockDetail.name}</td>
                  </tr>
                  <tr>
                    <th>取引</th>
                    <td>{transaction}</td>
                  </tr>
                  <tr>
                    <th>取引株数</th>
                    <td>{marginOrder.sum_quantity}株</td>
                  </tr>
                  <tr>
                    <th>取引期限</th>
                    <td>当日限り</td>
                  </tr>
                  <tr>
                    <th>概算金額</th>
                    <td>{marginOrder.estimated_delivery_amount}円</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="u-mt20p">
          <Link className="c-button c-button_cancel" to={`/account/margin/${stockDetail.code}/select`}>建玉選択へ戻る</Link>
          <a className="c-button" onClick={() => this.confirm()}>発注する</a>
        </div>
      </div>
    )
  }
}

export default MarginDelivery;