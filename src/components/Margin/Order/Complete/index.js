import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { transactionByButtonType } from '../../common';
import { formatCurrency } from '../../../../utils';

class MarginOrderComplete extends Component {
  componentWillMount() {
    const { marginOrderSendParams, stockDetail, buttonType } = this.props

    if (marginOrderSendParams == null || stockDetail == null || buttonType == null) {
      this.props.history.push('/account/margin')
      return null
    }
  }

  render() {
    const { marginOrderSendParams, stockDetail, buttonType } = this.props

    if (marginOrderSendParams == null || stockDetail == null || buttonType == null) {
      return null
    }

    const transaction = transactionByButtonType(buttonType)
    const formattedPrice = marginOrderSendParams.order_type === 'Limit' ? `指値${formatCurrency(marginOrderSendParams.price)}円` : '成行';

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
                    <th>市場</th>
                    <td>東証</td>
                  </tr>
                  <tr>
                    <th>取引</th>
                    <td>{transaction}</td>
                  </tr>
                  <tr>
                    <th>取引株数</th>
                    <td>{marginOrderSendParams.quantity}株</td>
                  </tr>
                  <tr>
                    <th>執行条件</th>
                    <td>{formattedPrice}</td>
                  </tr>
                  <tr>
                    <th>取引期限</th>
                    <td>当日限り</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="u-mt20p">
          <Link className="c-button" to="/account/order">注文照会へ</Link>
          <Link className="c-button" to="/account/margin">信用決済へ</Link>
        </div>
      </div>
    )
  }
}

export default MarginOrderComplete;