import React, { Component } from 'react';

class Balance extends Component {
  render() {
    return (
      <div className="l-contents">
        <div className="l-contents_head">
          <div className="p-pageTitle">
            <div className="p-pageTitle_head">
              <div className="p-pageTitle_title">資産状況<span className="p-pageTitle_separate"></span>口座余力</div>
            </div>
            <div className="p-pageTitle_body">
              <div className="p-nav_sub">
                <ul>
                  <li className="is_current"><a href="3.html">口座余力</a></li>
                  <li><a href="3-4.html">取引履歴</a></li>
                  <li><a href="3-4-1.html">特定口座譲渡益税／配当</a></li>
                  <li><a href="3-5.html">入出金履歴</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="l-contents_body">
          <div className="l-contents_body_inner">
            <div className="p-lives u-mt40p">
              <div className="p-section_header">
                <div className="p-section_header_title">口座余力</div>
                <div className="p-section_header_aside">2018/02/20 14:30（<a className="icon-arrows-ccw" href="">更新</a>）</div>
              </div>
              <div className="p-life">
                <div className="p-life_head">買付余力</div>
                <div className="p-life_body">1,000,000<span className="p-unit">円</span></div>
              </div>
              <div className="p-life">
                <div className="p-life_head"> 信用余力</div>
                <div className="p-life_body">3,000,000<span className="p-unit">円</span></div>
              </div>
              <div className="p-life">
                <div className="p-life_head"> 出金可能額</div>
                <div className="p-life_body">1,000,000<span className="p-unit">円</span></div>
              </div>
              <div className="p-life">
                <div className="p-life_head"> 現引可能額</div>
                <div className="p-life_body">1,000,000<span className="p-unit">円</span></div>
              </div>
            </div>
            <div className="u-mt40p">
              <div className="p-section_header">
                <div className="p-section_header_title">出金可能額 <b>詳細</b></div>
              </div>
              <div className="c-table-responsive">
                <table className="c-table_d">
                  <thead>
                    <tr>
                      <th>受渡日</th>
                      <td>2018/01/15</td>
                      <td>2018/01/16</td>
                      <td>2018/01/17</td>
                      <td>2018/01/18</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>出金可能額</th>
                      <td>1,000,000円</td>
                      <td>1,000,000円</td>
                      <td>1,000,000円</td>
                      <td>1,000,000円</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="u-mt40p">
              <div className="p-section_header">
                <div className="p-section_header_title">信用保証金 <b>詳細</b></div>
                <div className="p-section_header_aside">2018/02/20 14:30（<a className="icon-arrows-ccw" href="">更新</a>）</div>
              </div>
              <div className="c-table-responsive">
                <table className="c-table_d">
                  <thead>
                    <tr>
                      <th>受渡日</th>
                      <td>2018/1/15</td>
                      <td>2018/1/16</td>
                      <td>2018/1/17</td>
                      <td>2018/1/18</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>実質保証金（A+B-C-D）</th>
                      <td>1,000,000円</td>
                      <td>1,000,000円</td>
                      <td>1,000,000円</td>
                      <td>1,000,000円</td>
                    </tr>
                    <tr>
                      <th>　保証金現金（A）</th>
                      <td>1,000,000円</td>
                      <td>1,000,000円</td>
                      <td>1,000,000円</td>
                      <td>1,000,000円</td>
                    </tr>
                    <tr>
                      <th>　代用証券（B）</th>
                      <td>400,000</td>
                      <td>400,000</td>
                      <td>400,000</td>
                      <td>400,000</td>
                    </tr>
                    <tr>
                      <th>　諸経費（C）</th>
                      <td>-5,000</td>
                      <td>-5,000</td>
                      <td>-5,000</td>
                      <td>-5,000</td>
                    </tr>
                    <tr>
                      <th>　建玉評価損（D）</th>
                      <td>-100,000</td>
                      <td>-100,000</td>
                      <td>-100,000</td>
                      <td>-100,000</td>
                    </tr>
                    <tr>
                      <th>建玉金合計（E）</th>
                      <td>1,500,000</td>
                      <td>1,500,000</td>
                      <td>1,500,000</td>
                      <td>1,500,000</td>
                    </tr>
                    <tr>
                      <th>　未決済建玉</th>
                      <td>1,000,000</td>
                      <td>1,000,000</td>
                      <td>1,000,000</td>
                      <td>1,000,000</td>
                    </tr>
                    <tr>
                      <th>　新規注文中建玉</th>
                      <td>500,000</td>
                      <td>500,000</td>
                      <td>500,000</td>
                      <td>500,000</td>
                    </tr>
                    <tr>
                      <th>新規建可能額</th>
                      <td>-590,909 </td>
                      <td>-590,909 </td>
                      <td>-590,909 </td>
                      <td>-590,909 </td>
                    </tr>
                    <tr>
                      <th>保証金預託率
                        <p className="u-11px">（実質保証金÷未決済建玉）</p>
                      </th>
                      <td>20.00%</td>
                      <td>20.00%</td>
                      <td>20.00%</td>
                      <td>20.00%</td>
                    </tr>
                    <tr>
                      <th>追加保証金</th>
                      <td>195,000 </td>
                      <td>195,000 </td>
                      <td>195,000 </td>
                      <td>195,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Balance;