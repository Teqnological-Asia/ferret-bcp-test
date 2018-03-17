import React, { Component } from 'react';

class FractionalSell extends Component {
  render() {
    return (
      <div className="l-contents">
        <div className="l-contents_head">
          <div className="p-pageTitle">
            <div className="p-pageTitle_head">
              <div className="p-pageTitle_title">手続き／報告書<span className="p-pageTitle_separate"></span>単元未満株式売却サービス</div>
            </div>
            <div className="p-pageTitle_body">
              <div className="p-nav_sub">
                <ul>
                  <li><a href="2.html">入出金</a></li>
                  <li className="is_current"><a href="2-1-1.html">単元未満株式売却</a></li>
                  <li><a href="2-2.html">株式出庫</a></li>
                  <li><a href="2-3.html">取引報告書印刷</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="l-contents_body">
          <div className="l-contents_body_inner">
            <div className="u-mt40p">
              <div className="p-section_header">
                <div className="p-section_header_title">単元未満株式 <b>売却サービス</b></div>
                <div className="p-section_header_tools">
                  <ul>
                    <li><a href="2-1-2.html"><i className="icon-right-open"></i>買取請求はこちら</a></li>
                    <li><a href="2-1-4.html"><i className="icon-info-circled"></i>予約確認はこちら（当日のみ）</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="u-mt20p">
              <table className="c-table_list">
                <thead>
                  <tr>
                    <th className="c-action"></th>
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
                        <input id="dummy_check_id" type="checkbox" name="dummy_check"/><span>選択する</span>
                      </label>
                    </td>
                    <td className="c-l" data-name="銘柄コード">6501</td>
                    <td className="c-l" data-name="銘柄">日立</td>
                    <td className="c-l" data-name="区分">特定</td>
                    <td className="c-l" data-name="預り">代用</td>
                    <td className="c-display_label_sp" data-name="数量">
                      <div className="p-form-object_stock">
                        <input className="dummy_text" type="text" value="80" placeholder="数値を入力してください" disabled/><span className="p-unit">株</span>
                      </div>
                    </td>
                    <td className="c-l" data-name="取得日">2018/1/4</td>
                    <td data-name="取得単価">751円</td>
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
                    <td className="c-display_label_sp" data-name="数量">
                      <div className="p-form-object_stock">
                        <input className="dummy_text" type="text" value="48" placeholder="数値を入力してください" disabled/><span className="p-unit">株</span>
                      </div>
                    </td>
                    <td className="c-l" data-name="取得日">2018/1/4</td>
                    <td data-name="取得単価">3,750円</td>
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
                    <td className="c-display_label_sp" data-name="数量">
                      <div className="p-form-object_stock">
                        <input className="dummy_text" type="text" value="20" placeholder="数値を入力してください" disabled/><span className="p-unit">株</span>
                      </div>
                    </td>
                    <td className="c-l" data-name="取得日">2018/1/4</td>
                    <td data-name="取得単価">5,230円</td>
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
                    <td className="c-display_label_sp" data-name="数量">
                      <div className="p-form-object_stock">
                        <input className="dummy_text" type="text" value="35" placeholder="数値を入力してください" disabled/><span className="p-unit">株</span>
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
                <p>※一注文につき、約定代金の1.08%（税込み）の手数料がかかります。</p>
                <p>※約定は売却サービス受付日の翌営業日の前場始値となります。前場で取引が成立しない場合は「失効」となりますので、売却を継続される場合には、再度申し込みください。</p>
              </div>
            </div>
            <div className="u-mt20p">
              <div className="c-table_inputs">
                <table>
                  <tbody>
                    <tr>
                      <th>依頼日<br/><span className="u-11px">当日受付分16時まで</span></th>
                      <td>2018年 3月 1日</td>
                    </tr>
                    <tr>
                      <th>支払い方法</th>
                      <td>約定の4営業日目にお預り金へ入金されます。</td>
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
                      <td>約定代金の1.08%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="u-mt20p"><a className="c-button" href="2-1-3.html">売却申し込みする</a></div>
          </div>
        </div>
      </div>
    );
  }
}

export default FractionalSell;
