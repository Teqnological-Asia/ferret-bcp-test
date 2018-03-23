import React, { Component } from 'react';

class MarginReceipt extends Component {
  render() {
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
                    <td>6501/日立</td>
                  </tr>
                  <tr>
                    <th>取引</th>
                    <td>現引</td>
                  </tr>
                  <tr>
                    <th>取引株数</th>
                    <td>1000株</td>
                  </tr>
                  <tr>
                    <th>取引期限</th>
                    <td>当日限り</td>
                  </tr>
                  <tr>
                    <th>概算金額</th>
                    <td>650,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="u-mt20p"><a className="c-button c-button_cancel" href="3-2-0.html">建玉選択へ戻る</a><a className="c-button" href="3-2-0-2.html">発注する</a></div>
      </div>
    )
  }
}

export default MarginReceipt;