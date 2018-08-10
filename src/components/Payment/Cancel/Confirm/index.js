import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { formatDate, formatCurrency } from '../../../../utils';

class PaymentCancelConfirm extends Component {
  onUnload = (event) => {
    event.returnValue = "unload";
  }

  componentDidMount() {
    window.addEventListener("beforeunload", this.onUnload)
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.onUnload)
  }

  handleSubmit = () => {
    this.props.cancelCashTransferRequest(this.props.match.params.id);
  }

  render() {
    const { payment } = this.props;
    if (payment == null) return <Redirect to={{ pathname: `/account/payment/cancel` }} />;

    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">出金 <b>取消確認</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>以下の内容をご確認の上、「取り消しする」を押してください。</p>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="c-table-responsive">
            <table className="c-table_d c-table_confirm">
              <tbody>
                <tr>
                  <th>受渡日</th>
                  <td>{formatDate(payment.delivery_date)}</td>
                </tr>
                <tr>
                  <th>金額</th>
                  <td>{formatCurrency(payment.amount, 0)}円</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="u-mt20p">
          <Link className="c-button c-button_cancel" to="/account/payment/cancel">戻る</Link>
          <button className="c-button c-button_delete" onClick={this.handleSubmit}>取り消しする</button>
        </div>
      </div>
    );
  }
}

export default PaymentCancelConfirm;