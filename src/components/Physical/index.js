import React, { Component } from 'react';

class Physical extends Component {
  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">現物株式 <b>売却</b></div>
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
                <th className="c-l">銘柄コード</th>
                <th className="c-l">銘柄</th>
                <th className="c-l">区分</th>
                <th className="c-l">取得日</th>
                <th>数量/（取引中）</th>
                <th>取得単価</th>
                <th>評価額</th>
                <th>評価損益</th>
                <th className="c-c">発注</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="c-l c-code">6501</td>
                <td className="c-l c-title" data-name="6501">日立</td>
                <td className="c-l" data-name="区分">特定</td>
                <td className="c-l" data-name="取得日">2018/1/4</td>
                <td data-name="数量/（取引中）">1000</td>
                <td data-name="取得単価">751円</td>
                <td data-name="評価額">751,000円</td>
                <td data-name="評価損益"><span className="u-minus">-5000</span></td>
                <td className="c-c"><a className="c-button c-button_small c-button_sell" href="3-1-1.html">売却</a></td>
              </tr>
              <tr className="c-disable">
                <td className="c-l c-code">2914</td>
                <td className="c-l c-title" data-name="2914">JT</td>
                <td className="c-l" data-name="区分">特定</td>
                <td className="c-l" data-name="取得日">2018/1/4</td>
                <td data-name="数量/（取引中）">100（100）</td>
                <td data-name="取得単価">3,750円</td>
                <td data-name="評価額">375,000円</td>
                <td data-name="評価損益"><span className="u-minus">-100000</span></td>
                <td></td>
              </tr>
              <tr>
                <td className="c-l c-code">9432</td>
                <td className="c-l c-title" data-name="9432">NTT</td>
                <td className="c-l" data-name="区分">特定</td>
                <td className="c-l" data-name="取得日">2018/1/4</td>
                <td data-name="数量/（取引中）">100（50）</td>
                <td data-name="取得単価">5,230円</td>
                <td data-name="評価額">523,000円</td>
                <td data-name="評価損益"><span className="u-minus">-23000</span></td>
                <td className="c-c"><a className="c-button c-button_small c-button_sell" href="3-1-1.html">売却</a></td>
              </tr>
              <tr>
                <td className="c-l c-code">8601</td>
                <td className="c-l c-title" data-name="8601">松竹</td>
                <td className="c-l" data-name="区分">特定</td>
                <td className="c-l" data-name="取得日">2018/1/4</td>
                <td data-name="数量/（取引中）">10</td>
                <td data-name="取得単価">15,230円</td>
                <td data-name="評価額">152,300円</td>
                <td data-name="評価損益"><span className="u-minus">-100</span></td>
                <td className="c-c"><a className="c-button c-button_small c-button_sell" href="3-1-1.html">売却</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Physical;