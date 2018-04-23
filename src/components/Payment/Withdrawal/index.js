import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { formatCurrency, formatDate } from '../../../utils';

class PaymentWithdrawal extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.withdrawRequest();
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

  render() {
    const { cashWithdrawal, amount } = this.props;
    const today = new Date();

    if (cashWithdrawal == null || amount == null) return <Redirect to={{ pathname: `/account/payment` }} />;

    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">出金 <b>予約確認 </b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>ご出金金額をご確認の上、「出金する」を押してください。</p>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="c-table_inputs">
            <table>
              <tbody>
                <tr>
                  <th>受付日</th>
                  <td>{formatDate(today)}</td>
                </tr>
                <tr>
                  <th>振込予定日</th>
                  <td>{formatDate(cashWithdrawal.delivery_date)}</td>
                </tr>
                <tr>
                  <th>金額</th>
                  <td>{formatCurrency(amount)}円</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="u-mt20p">
          <Link className="c-button c-button_cancel" to="/account/payment">戻る</Link>
          <a className="c-button" onClick={this.handleSubmit}>出金する</a>
        </div>
      </div>
    );
  }
}

export default PaymentWithdrawal;