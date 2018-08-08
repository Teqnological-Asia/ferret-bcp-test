import React, { Component } from 'react';
import { transactionByButtonType } from '../../common';
import { Link } from 'react-router-dom';

class MarginReceiptComplete extends Component {
  render() {
    const { marginOrder, stockDetail, buttonType } = this.props
    if (stockDetail == null || marginOrder == null || buttonType == null) {
      this.props.history.push('/account/margin')
      return null
    }
    const transaction = transactionByButtonType(buttonType)

    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">信用返済（{transaction}） <b>取引受付</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>ご取引を受け付けいたしました。</p>
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
          <Link className="c-button" to="/account/margin">注文照会へ</Link>
          <Link className="c-button" to="/account/order">信用決済へ</Link>
        </div>
      </div>
    )
  }
}

export default MarginReceiptComplete;