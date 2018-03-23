import React, { Component } from 'react';

class Margin extends Component {
  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">信用決済</div>
          </div>
        </div>
        <div className="p-section_lead u-mt20p">
          <p className="p-no_item">0 item（表示する内容がない場合　文言要確認）</p>
        </div>
        <div className="u-mt20p">
          <table className="c-table_list">
            <thead>
              <tr>
                <th className="c-l">銘柄コード</th>
                <th className="c-l">銘柄</th>
                <th className="c-l">区分</th>
                <th className="c-l">建日</th>
                <th>数量/（取引中）</th>
                <th>平均建単価</th>
                <th>評価損益</th>
                <th className="c-c">現引/渡</th>
                <th className="c-c">発注</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="c-l" data-name="銘柄コード">6501</td>
                <td className="c-l" data-name="銘柄">日立/買建/一般信用</td>
                <td className="c-l" data-name="区分">特定</td>
                <td className="c-l" data-name="建日">2018/1/4</td>
                <td data-name="数量/（取引中）">1000</td>
                <td data-name="平均建単価">751円</td>
                <td data-name="評価損益"><span className="u-minus">-1000</span></td>
                <td className="c-c"><a className="c-button c-button_small c-button_actual" href="3-2-0.html">現引</a></td>
                <td className="c-c"><a className="c-button c-button_small c-button_sell" href="3-2-0.html">返済売</a></td>
              </tr>
              <tr>
                <td className="c-l" data-name="銘柄コード">2914</td>
                <td className="c-l" data-name="銘柄">JT/買建/一般信用</td>
                <td className="c-l" data-name="区分">特定</td>
                <td className="c-l" data-name="建日">2018/1/4</td>
                <td data-name="数量/（取引中）">100</td>
                <td data-name="平均建単価">3,750円</td>
                <td data-name="評価損益"><span className="u-minus">-100000</span></td>
                <td className="c-c"><a className="c-button c-button_small c-button_actual" href="3-2-0.html">現引</a></td>
                <td className="c-c"><a className="c-button c-button_small c-button_sell" href="3-2-0.html">返済売</a></td>
              </tr>
              <tr className="c-disable">
                <td className="c-l" data-name="銘柄コード">9432</td>
                <td className="c-l" data-name="銘柄">NTT/売建/一般信用</td>
                <td className="c-l" data-name="区分">特定</td>
                <td className="c-l" data-name="建日">2018/1/4</td>
                <td data-name="数量/（取引中）">100</td>
                <td data-name="平均建単価">5,230円</td>
                <td data-name="評価損益"><span className="u-minus">-23000</span></td>
                <td className="c-c"><a className="c-button c-button_small c-button_disable">現渡</a></td>
                <td className="c-c"><a className="c-button c-button_small c-button_disable">返済買</a></td>
              </tr>
              <tr>
                <td className="c-l" data-name="銘柄コード">8601</td>
                <td className="c-l" data-name="銘柄">松竹/売建/一般信用</td>
                <td className="c-l" data-name="区分">特定</td>
                <td className="c-l" data-name="建日">2018/1/4</td>
                <td data-name="数量/（取引中）">10</td>
                <td data-name="平均建単価">15,230円</td>
                <td data-name="評価損益"><span className="u-minus">-100</span></td>
                <td className="c-c"><a className="c-button c-button_small c-button_actual" href="3-2-0.html">現渡</a></td>
                <td className="c-c"><a className="c-button c-button_small c-button_buy" href="3-2-0.html">返済買</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Margin;