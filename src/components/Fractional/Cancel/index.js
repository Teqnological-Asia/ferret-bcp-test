import React, { Component } from 'react';

class FractionalCancel extends Component {
  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">単元未満株式 <b>売却／買取 依頼予約確認</b></div>
            <div className="p-section_header_tools">
              <ul>
                <li><a href="2-1-1.html"><i className="icon-right-open"></i>売却サービスはこちら</a></li>
                <li><a href="2-1-2.html"><i className="icon-right-open"></i>買取請求はこちら</a></li>
              </ul>
            </div>
          </div>
        </div>
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
                <th className="c-l">方法</th>
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
                <td className="c-l" data-name="数量">80</td>
                <td className="c-l" data-name="取得日">2018/1/4</td>
                <td data-name="取得単価">751円</td>
                <td className="c-l" data-name="方法">買取請求</td>
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
                <td className="c-l" data-name="数量">48</td>
                <td className="c-l" data-name="取得日">2018/1/4</td>
                <td data-name="取得単価">3,750円</td>
                <td className="c-l" data-name="方法">買取請求</td>
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
                <td className="c-l" data-name="数量">20</td>
                <td className="c-l" data-name="取得日">2018/1/4</td>
                <td data-name="取得単価">5,230円</td>
                <td className="c-l" data-name="方法">売却</td>
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
                <td className="c-l" data-name="数量">35</td>
                <td className="c-l" data-name="取得日">2018/1/4</td>
                <td data-name="取得単価">15,230円</td>
                <td className="c-l" data-name="方法">売却</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="u-mt20p">
          <div className="p-section_lead">
            <p>※注文の訂正はできません。訂正する場合には一旦注文の取消後、再度注文を発注ください。</p>
            <p>※単元未満株式売却注文取消は指示当日の16時まで可能です。</p>
            <p>※単元未満株式買取請求の取消は指示当日の24時まで可能です。</p>
            <p>※単元未満株式買取請求は特定口座から一般口座への払出を行い取扱いいたします。</p>
          </div>
        </div>
        <div className="u-mt20p"><a className="c-button" href="2-1-5.html">取り消す</a></div>
      </div>
    );
  }
}

export default FractionalCancel;