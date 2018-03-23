import React, { Component } from 'react';

class DeliveryCancel extends Component {
  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">株式出庫 <b>予約確認</b></div>
            <div className="p-section_header_tools">
              <ul>
                <li><a href="2-2.html"><i className="icon-right-open"></i>口座出庫依頼書はこちら</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/*if 0*/}
        <div className="p-section_lead u-mt20p">
          <p className="p-no_item">0 item（表示する内容がない場合　文言要確認）</p>
        </div>
        {/*else*/}
        <div className="u-mt20p">
          <table className="c-table_list">
            <thead>
              <tr>
                <th></th>
                <th className="c-l">銘柄コード</th>
                <th className="c-l">銘柄</th>
                <th className="c-l">区分</th>
                <th className="c-l">預り</th>
                <th className="c-l">数量</th>
                <th className="c-l">取得日</th>
                <th>取得単価</th>
                <th className="c-l">メッセージ/備考</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="c-action">
                  <label>
                    <input type="checkbox" name="dummy_check"/><span>選択する</span>
                  </label>
                </td>
                <td className="c-l" data-name="銘柄コード">6501</td>
                <td className="c-l" data-name="銘柄">日立</td>
                <td className="c-l" data-name="区分">特定</td>
                <td className="c-l" data-name="預り">代用</td>
                <td className="c-l" data-name="数量">20000</td>
                <td className="c-l" data-name="取得日">2018/1/4</td>
                <td data-name="取得単価">751円</td>
                <td className="c-l" data-name="メッセージ/備考">公開買付</td>
              </tr>
              <tr>
                <td className="c-action">
                  <label>
                    <input type="checkbox" name="dummy_check"/><span>選択する</span>
                  </label>
                </td>
                <td className="c-l" data-name="銘柄コード">2914</td>
                <td className="c-l" data-name="銘柄">JT</td>
                <td className="c-l" data-name="区分">特定</td>
                <td className="c-l" data-name="預り">代用</td>
                <td className="c-l" data-name="数量">1000</td>
                <td className="c-l" data-name="取得日">2018/1/4</td>
                <td data-name="取得単価">3,750円</td>
                <td className="c-l" data-name="メッセージ/備考">-</td>
              </tr>
              <tr>
                <td className="c-action">
                  <label>
                    <input type="checkbox" name="dummy_check"/><span>選択する</span>
                  </label>
                </td>
                <td className="c-l" data-name="銘柄コード">9432</td>
                <td className="c-l" data-name="銘柄">NTT</td>
                <td className="c-l" data-name="区分">特定</td>
                <td className="c-l" data-name="預り">代用</td>
                <td className="c-l" data-name="数量">600</td>
                <td className="c-l" data-name="取得日">2018/1/4</td>
                <td data-name="取得単価">5,230円</td>
                <td className="c-l" data-name="メッセージ/備考">-</td>
              </tr>
              <tr>
                <td className="c-action">
                  <label>
                    <input type="checkbox" name="dummy_check"/><span>選択する</span>
                  </label>
                </td>
                <td className="c-l" data-name="銘柄コード">8601</td>
                <td className="c-l" data-name="銘柄">松竹</td>
                <td className="c-l" data-name="区分">特定</td>
                <td className="c-l" data-name="預り">代用</td>
                <td className="c-l" data-name="数量">100</td>
                <td className="c-l" data-name="取得日">2018/1/4</td>
                <td data-name="取得単価">15,230円</td>
                <td className="c-l" data-name="メッセージ/備考">-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="u-mt40p"><a className="c-button c-button_delete" href="2-2-3.html">選択した項目の予約を取り消す</a></div>
      </div>
    );
  }
}

export default DeliveryCancel;
