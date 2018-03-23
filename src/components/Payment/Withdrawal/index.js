import React, { Component } from 'react';

class PaymentWithdrawal extends Component {
  render() {
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
              <tr>
                <th>受付日</th>
                <td>2018/01/18</td>
              </tr>
              <tr>
                <th>振込予定日</th>
                <td>2018/01/19</td>
              </tr>
              <tr>
                <th>金額</th>
                <td>1,901円</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="u-mt20p"><a className="c-button" href="2-0-2.html">出金する</a></div>
      </div>
    );
  }
}

export default PaymentWithdrawal;