import React, { Component } from 'react';

class Payment extends Component {
  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">入金 <b>（オンライン即時入金）</b></div>
            <div className="p-section_header_aside">
              <p>※五十音順</p>
            </div>
          </div>
        </div>
        <div className="u-mt20p">
          <a className="c-button" href="">Callback</a>
        </div>
        <div className="u-mt30p">
          <div className="p-section_lead">
            <p>※『提携金融機関における手続きの最後で、「加盟店に通知」「加盟店画面に戻る」「加盟店のサイトへ戻る」「ショップに戻る」等のクリックを必ずおこなってください。先の文言をクリックしなかった場合即時入金が正常に処理されません。（手続きが完了しなかった場合、入金反映が入金当日の夕刻以降、もしくは入金されない場合があります。十分ご注意ください。)』</p>
            <p>※必ずご本人名義の口座からのお手続きください。</p>
            <p>※振込手数料は弊社負担とさせていただきます。</p>
          </div>
        </div>
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">入金 <b>（お振込みによる入金）</b></div>
          </div>
          <div className="p-section_bankaccount u-mt20p">
            <dl>
              <dt>振込先</dt>
              <dd>みずほ銀行 麹町支店 普通 0000000</dd>
              <dt>口座名義</dt>
              <dd>カ）スマートプラス</dd>
            </dl>
          </div>
          <div className="u-mt20p">
            <div className="p-section_lead">
              <p>※ご入金の手数料はお客様ご負担となります。</p>
              <p>※同一口座名義人からのお振込みをお願いします。</p>
              <p>※ご入金が確認でき次第、お客様のお預り金に反映します。</p>
            </div>
          </div>
        </div>
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">出金</div>
          </div>
          <div className="c-table_inputs">
            <table>
              <tbody>
                <tr>
                  <th>出金指示可能額</th>
                  <td>1,000,000円</td>
                </tr>
                <tr>
                  <th>ご出金先</th>
                  <td>みずほ銀行 麹町支店 普通 0000000</td>
                </tr>
                <tr>
                  <th>出金指示額</th>
                  <td>
                    <div className="u-row">
                      <div className="u-col_25 u-col_75_sp">
                        <input className="p-form-object" type="text"/>
                      </div>
                      <div className="u-col_25 u-col_25_sp"><span className="u-15px">円</span></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="u-mt20p">
            <a className="c-button" href="2-0-1.html">出金確認画面へ</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;