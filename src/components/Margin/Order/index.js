import React, { Component } from 'react';

class MarginOrder extends Component {
  render() {
    return (
      <div className="l-contents">
        <div className="l-contents_head">
          <div className="p-pageTitle">
            <div className="p-pageTitle_head">
              <div className="p-pageTitle_title">障害時取引メニュー<span className="p-pageTitle_separate"></span>信用決済</div>
            </div>
            <div className="p-pageTitle_body">
              <div className="p-nav_sub">
                <ul>
                  <li><a href="3-1.html">現物株式売却</a></li>
                  <li className="is_current"><a href="3-2.html">信用決済</a></li>
                  <li><a href="3-3.html">注文照会</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="l-contents_body">
          <div className="l-contents_body_inner">
            <div className="u-mt40p">
              <div className="p-section_header">
                <div className="p-section_header_title">信用決済 <b>個別選択</b></div>
              </div>
            </div>
            <div className="u-mt20p">
              <table className="c-table_list">
                <thead>
                  <tr>
                    <th className="c-l">銘柄コード</th>
                    <th className="c-l">銘柄</th>
                    <th className="c-l">区分</th>
                    <th className="c-l">建日</th>
                    <th className="c-c">数量</th>
                    <th>平均建単価</th>
                    <th>評価損益</th>
                    <th className="c-c">現引/渡</th>
                    <th className="c-c">発注	</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="c-l" data-name="銘柄コード">6501</td>
                    <td className="c-l" data-name="銘柄">日立/買建/一般信用</td>
                    <td className="c-l" data-name="区分">特定</td>
                    <td className="c-l" data-name="建日">2018/1/4</td>
                    <td className="c-r" data-name="数量">
                      <input className="p-form-object" type="text" value="500"/>
                    </td>
                    <td data-name="平均建単価">750円</td>
                    <td data-name="評価損益">-100</td>
                    <td className="c-c"><a className="c-button c-button_small c-button_actual" href="3-2-0-1.html">現引</a></td>
                    <td className="c-c"><a className="c-button c-button_small c-button_sell" href="3-2-1.html">返済売</a></td>
                  </tr>
                  <tr>
                    <td className="c-l" data-name="銘柄コード">6501</td>
                    <td className="c-l" data-name="銘柄">日立/買建/一般信用</td>
                    <td className="c-l" data-name="区分">特定</td>
                    <td className="c-l" data-name="建日">2018/1/5</td>
                    <td data-name="数量">
                      <input className="p-form-object" type="text" value="200"/>
                    </td>
                    <td data-name="平均建単価">740円</td>
                    <td data-name="評価損益">-200</td>
                    <td> </td>
                    <td> </td>
                  </tr>
                  <tr className="c-disable">
                    <td className="c-l" data-name="銘柄コード">6501</td>
                    <td className="c-l" data-name="銘柄">日立/買建/一般信用</td>
                    <td className="c-l" data-name="区分">特定</td>
                    <td className="c-l" data-name="建日">2018/1/7</td>
                    <td data-name="数量">
                      <input className="p-form-object" type="text" value="100" disabled/>
                    </td>
                    <td data-name="平均建単価">720円</td>
                    <td data-name="評価損益">-400</td>
                    <td> </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td className="c-l" data-name="銘柄コード">6501</td>
                    <td className="c-l" data-name="銘柄">日立/買建/一般信用</td>
                    <td className="c-l" data-name="区分">特定</td>
                    <td className="c-l" data-name="建日">2018/1/6</td>
                    <td data-name="数量">
                      <input className="p-form-object" type="text" value="200"/>
                    </td>
                    <td data-name="平均建単価">730円</td>
                    <td data-name="評価損益">-300</td>
                    <td> </td>
                    <td> </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MarginOrder;