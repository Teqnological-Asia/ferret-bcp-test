import React, { Component } from 'react';

class PaymentDeposit extends Component {
  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">入金 <b>（オンライン即時入金）</b></div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>以下の金融機関のネットバンキングから入金を行います。</p>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="c-table_inputs">
            <table>
              <tbody>
                <tr>
                  <th>金融機関</th>
                  <td>三菱UFJ銀行</td>
                </tr>
                <tr>
                  <th>入金指示金額</th>
                  <td>
                    <div className="u-row">
                      <div className="u-col_25">
                        <input className="p-form-object" type="text" placeholder="入金指示金額"/>
                      </div>
                      <div className="u-col_25"><span className="u-15px">円</span></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="u-mt20p"><a className="c-button" href="2-0-0-2.html">入金確認画面へ</a></div>
      </div>
    );
  }
}

export default PaymentDeposit;
