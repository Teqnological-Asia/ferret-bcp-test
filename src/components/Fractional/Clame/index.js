import React, { Component } from 'react';

class FractionalClame extends Component {
  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">単元未満株式 <b>買取請求</b></div>
            <div className="p-section_header_tools">
              <ul>
                <li><a href="/account/fractional/sell"><i className="icon-right-open"></i>売却サービスはこちら</a></li>
                <li><a href="/account/fractional/cancel"><i className="icon-info-circled"></i>予約確認はこちら（当日のみ）</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="u-mt20p">
          <table className="c-table_list" cellpadding="0" cellspacing="0">
            <thead>
              <tr>
                <th></th>
                <th className="c-l">銘柄コード</th>
                <th className="c-l">銘柄</th>
                <th className="c-l">区分</th>
                <th className="c-l">預り</th>
                <th>数量</th>
                <th className="c-l">取得日</th>
                <th>取得単価</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="c-action">
                  <label>
                    <input type="checkbox" name="dummy_check" /><span>選択する</span>
                  </label>
                </td>
                <td className="c-l" data-name="銘柄コード">6501</td>
                <td className="c-l" data-name="銘柄">日立</td>
                <td className="c-l" data-name="区分">特定</td>
                <td className="c-l" data-name="預り">代用</td>
                <td className="c-display_label_sp" data-name="数量">
                  <div className="p-form-object_stock">
                    <input className="dummy_text" type="text" value="80" placeholder="数値を入力してください" disabled /><span className="p-unit">株</span>
                  </div>
                </td>
                <td className="c-l" data-name="取得日">2018/1/4</td>
                <td data-name="取得単価">751円</td>
              </tr>
              <tr>
                <td className="c-action">
                  <label>
                    <input type="checkbox" name="dummy_check" /><span>選択する</span>
                  </label>
                </td>
                <td className="c-l" data-name="銘柄コード">2914</td>
                <td className="c-l" data-name="銘柄">JT</td>
                <td className="c-l" data-name="区分">特定</td>
                <td className="c-l" data-name="預り">代用</td>
                <td className="c-display_label_sp" data-name="数量">
                  <div className="p-form-object_stock">
                    <input className="dummy_text" type="text" value="48" placeholder="数値を入力してください" disabled /><span className="p-unit">株</span>
                  </div>
                </td>
                <td className="c-l" data-name="取得日">2018/1/4</td>
                <td data-name="取得単価">3,750円</td>
              </tr>
              <tr>
                <td className="c-action">
                  <label>
                    <input type="checkbox" name="dummy_check" /><span>選択する</span>
                  </label>
                </td>
                <td className="c-l" data-name="銘柄コード">9432</td>
                <td className="c-l" data-name="銘柄">NTT</td>
                <td className="c-l" data-name="区分">特定</td>
                <td className="c-l" data-name="預り">代用</td>
                <td className="c-display_label_sp" data-name="数量">
                  <div className="p-form-object_stock">
                    <input className="dummy_text" type="text" value="20" placeholder="数値を入力してください" disabled /><span className="p-unit">株</span>
                  </div>
                </td>
                <td className="c-l" data-name="取得日">2018/1/4</td>
                <td data-name="取得単価">5,230円</td>
              </tr>
              <tr>
                <td className="c-action">
                  <label>
                    <input type="checkbox" name="dummy_check" /><span>選択する</span>
                  </label>
                </td>
                <td className="c-l" data-name="銘柄コード">8601</td>
                <td className="c-l" data-name="銘柄">松竹</td>
                <td className="c-l" data-name="区分">特定</td>
                <td className="c-l" data-name="預り">代用</td>
                <td className="c-display_label_sp" data-name="数量">
                  <div className="p-form-object_stock">
                    <input className="dummy_text" type="text" value="35" placeholder="数値を入力してください" disabled /><span className="p-unit">株</span>
                  </div>
                </td>
                <td className="c-l" data-name="取得日">2018/1/4</td>
                <td data-name="取得単価">15,230円</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>※一注文につき、540円（税込み）の手数料がかかります。預り金残高が不足している場合、承れませんのでご注意願います。</p>
            <p>※特定口座の計算対象外となります。ご注意ください。</p>
            <p>※通常、約定は当社から株主名簿管理人（信託銀行など）に買取請求を行った日の終値で買取られます。受付日と異なりますのでご注意願います。売買が成立しない場合は約定が遅れることがあります。</p>
            <p>※当社手数料とは別に、銘柄により買取手数料が売却代金より差し引かれる場合がございます。この買取手数料は発行会社の株式取扱規則に規定されているもので、銘柄ごとに手数料が異なっています。詳細につきましては、各銘柄の株主名簿管理人（信託銀行等）へお問合せください。</p>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="c-table_inputs">
            <table>
              <tbody>
                <tr>
                  <th>申請日<br/><span className="u-11px">当日受付分24時まで</span></th>
                  <td>2018年 3月 1日</td>
                </tr>
                <tr>
                  <th>支払い方法</th>
                  <td>請求から1～2週間ほどで弊社へ届出済みの金融機関口座へお振込み（ゆうちょ銀行を指定している場合、貯金事務センターから振替払出証書が送付されます）</td>
                </tr>
                <tr>
                  <th>合計買取請求件数</th>
                  <td>0件</td>
                </tr>
                <tr>
                  <th>合計株数</th>
                  <td>0株</td>
                </tr>
                <tr>
                  <th>合計手数料金額</th>
                  <td>0円</td>
                </tr>
                <tr>
                  <th> </th>
                  <td>特定口座外での譲渡</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="u-mt20p"><a className="c-button" href="2-1-3.html">買取請求申込みする</a></div>
      </div>
    )
  };
}

export default FractionalClame;