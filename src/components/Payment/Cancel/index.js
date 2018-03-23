import React, { Component } from 'react';

class PaymentCancel extends Component {
  render() {
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
                  <td>2018年1月18日</td>
                </tr>
                <tr>
                  <th>金額</th>
                  <td>1,901円</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="u-mt20p">
          <form action="3-5-2.html">
            <button className="c-button c-button_delete">取り消しする</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PaymentCancel;
