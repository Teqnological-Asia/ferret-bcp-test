import React, { Component } from 'react';

class OrderCancel extends Component {
  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">注文 <b>取消確認</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>以下のご注文をご確認の上、「取り消しする」を押してください。</p>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="c-table-responsive">
            <table className="c-table_d c-table_confirm">
              <tbody>
                <tr>
                  <th>銘柄コード</th>
                  <td>6501/日立</td>
                </tr>
                <tr>
                  <th>市場</th>
                  <td>当社最良執行市場</td>
                </tr>
                <tr>
                  <th>取引</th>
                  <td>現物売却</td>
                </tr>
                <tr>
                  <th>取引株数</th>
                  <td>1000株</td>
                </tr>
                <tr>
                  <th>執行条件</th>
                  <td>指値800円</td>
                </tr>
                <tr>
                  <th>取引期限</th>
                  <td>当日限り</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="u-mt20p"><a className="c-button c-button_delete" href="3-3-3.html">取り消しする</a></div>
      </div>
    )
  }
}

export default OrderCancel;