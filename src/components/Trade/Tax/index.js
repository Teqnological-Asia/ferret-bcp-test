import React, { Component } from 'react';

class TradeTax extends Component {
  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">特定口座<b> 取引明細</b></div>
          </div>
        </div>
        <div className="p-section_lead u-mt20p">
          <p className="p-no_item">0 item（表示する内容がない場合　文言要確認）</p>
        </div>
        <div className="u-mt20p">
          <div className="p-section_search">
            <div className="p-section_search_item">
              <div className="p-section_search_item_head">
                <label>期間指定</label>
              </div>
              <div className="p-section_search_item_body">
                <div className="p-form-object_calender"><i className="icon-calendar-empty"></i>
                  <input className="dates" type="text" placeholder="2018/9/10"/>
                </div><span>から</span>
                <div className="p-form-object_calender"><i className="icon-calendar-empty"></i>
                  <input className="dates" type="text" placeholder="" data-mindate="today"/>
                </div><span>まで</span>
              </div>
            </div>
            <div className="p-section_search_item">
              <div className="p-section_search_item_body">
                <input className="c-button c-button_small" type="button" value="検索"/>
              </div>
            </div>
          </div>
        </div>
        <div className="u-mt40p">
          <div className="c-table-responsive">
            <table className="c-table c-table_stripe">
              <thead>
                <tr>
                  <th className="c-l">約定日</th>
                  <th className="c-l">受渡日</th>
                  <th className="c-l">種類</th>
                  <th className="c-l">銘柄</th>
                  <th>数量</th>
                  <th>平均取得単価／<br/>建単価</th>
                  <th>譲渡金額</th>
                  <th>取得費</th>
                  <th>差損益</th>
                  <th>国税</th>
                  <th>地方税</th>
                  <th>還付金</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="c-l" data-label="約定日">2018/1/9</td>
                  <td className="c-l" data-label="受渡日">2018/1/12</td>
                  <td className="c-l" data-label="種類">還付金</td>
                  <td className="c-l" data-label="銘柄"> </td>
                  <td data-label="数量"> </td>
                  <td data-label="税単価"> </td>
                  <td data-label="譲渡金額"> </td>
                  <td data-label="取得費"> </td>
                  <td data-label="差損益"> </td>
                  <td data-label="国税"> </td>
                  <td data-label="地方税"> </td>
                  <td data-label="還付金">22</td>
                </tr>
                <tr>
                  <td className="c-l" data-label="約定日">2018/1/9</td>
                  <td className="c-l" data-label="受渡日">2018/1/12</td>
                  <td className="c-l" data-label="種類">現物</td>
                  <td className="c-l" data-label="銘柄">鹿島建設</td>
                  <td data-label="数量">100</td>
                  <td data-label="税単価">66円</td>
                  <td data-label="譲渡金額">6,430</td>
                  <td data-label="取得費">6,600</td>
                  <td data-label="差損益"><span className="u-minus">-170</span></td>
                  <td data-label="国税">0</td>
                  <td data-label="地方税">0</td>
                  <td data-label="還付金"> </td>
                </tr>
                <tr>
                  <td className="c-l">2018/1/9</td>
                  <td className="c-l">2018/1/12</td>
                  <td className="c-l">還付金</td>
                  <td className="c-l"> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td>21 </td>
                </tr>
                <tr>
                  <td className="c-l">2018/1/9</td>
                  <td className="c-l">2018/1/12</td>
                  <td className="c-l">現物</td>
                  <td className="c-l">ハザマ</td>
                  <td>100</td>
                  <td>80円</td>
                  <td>8,210</td>
                  <td>8,000</td>
                  <td>210</td>
                  <td>29</td>
                  <td>12</td>
                  <td></td>
                </tr>
                <tr>
                  <td className="c-l">2018/1/9</td>
                  <td className="c-l">2018/1/12</td>
                  <td className="c-l">信用</td>
                  <td className="c-l">大成建設</td>
                  <td>100</td>
                  <td>111円</td>
                  <td>10,999</td>
                  <td>11,100</td>
                  <td><span className="u-minus">-101</span></td>
                  <td>0</td>
                  <td>0</td>
                  <td>	</td>
                </tr>
                <tr>
                  <td className="c-l" data-label="約定日">2018/1/9</td>
                  <td className="c-l" data-label="受渡日">2018/1/12</td>
                  <td className="c-l" data-label="種類">還付金</td>
                  <td className="c-l" data-label="銘柄"> </td>
                  <td data-label="数量"> </td>
                  <td data-label="税単価"> </td>
                  <td data-label="譲渡金額"> </td>
                  <td data-label="取得費"> </td>
                  <td data-label="差損益"> </td>
                  <td data-label="国税"> </td>
                  <td data-label="地方税"> </td>
                  <td data-label="還付金">22</td>
                </tr>
                <tr>
                  <td className="c-l" data-label="約定日">2018/1/9</td>
                  <td className="c-l" data-label="受渡日">2018/1/12</td>
                  <td className="c-l" data-label="種類">現物</td>
                  <td className="c-l" data-label="銘柄">鹿島建設</td>
                  <td data-label="数量">100</td>
                  <td data-label="税単価">66円</td>
                  <td data-label="譲渡金額">6,430</td>
                  <td data-label="取得費">6,600</td>
                  <td data-label="差損益"><span className="u-minus">-170</span></td>
                  <td data-label="国税">0</td>
                  <td data-label="地方税">0</td>
                  <td data-label="還付金"> </td>
                </tr>
                <tr>
                  <td className="c-l">2018/1/9</td>
                  <td className="c-l">2018/1/12</td>
                  <td className="c-l">還付金</td>
                  <td className="c-l"> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td>21 </td>
                </tr>
                <tr>
                  <td className="c-l">2018/1/9</td>
                  <td className="c-l">2018/1/12</td>
                  <td className="c-l">現物</td>
                  <td className="c-l">ハザマ</td>
                  <td>100</td>
                  <td>80円</td>
                  <td>8,210</td>
                  <td>8,000</td>
                  <td>210</td>
                  <td>29</td>
                  <td>12</td>
                  <td></td>
                </tr>
                <tr>
                  <td className="c-l">2018/1/9</td>
                  <td className="c-l">2018/1/12</td>
                  <td className="c-l">信用</td>
                  <td className="c-l">大成建設</td>
                  <td>100</td>
                  <td>111円</td>
                  <td>10,999</td>
                  <td>11,100</td>
                  <td><span className="u-minus">-101</span></td>
                  <td>0</td>
                  <td>0</td>
                  <td>	</td>
                </tr>
                <tr>
                  <td className="c-l" data-label="約定日">2018/1/9</td>
                  <td className="c-l" data-label="受渡日">2018/1/12</td>
                  <td className="c-l" data-label="種類">還付金</td>
                  <td className="c-l" data-label="銘柄"> </td>
                  <td data-label="数量"> </td>
                  <td data-label="税単価"> </td>
                  <td data-label="譲渡金額"> </td>
                  <td data-label="取得費"> </td>
                  <td data-label="差損益"> </td>
                  <td data-label="国税"> </td>
                  <td data-label="地方税"> </td>
                  <td data-label="還付金">22</td>
                </tr>
                <tr>
                  <td className="c-l" data-label="約定日">2018/1/9</td>
                  <td className="c-l" data-label="受渡日">2018/1/12</td>
                  <td className="c-l" data-label="種類">現物</td>
                  <td className="c-l" data-label="銘柄">鹿島建設</td>
                  <td data-label="数量">100</td>
                  <td data-label="税単価">66円</td>
                  <td data-label="譲渡金額">6,430</td>
                  <td data-label="取得費">6,600</td>
                  <td data-label="差損益"><span className="u-minus">-170</span></td>
                  <td data-label="国税">0</td>
                  <td data-label="地方税">0</td>
                  <td data-label="還付金"> </td>
                </tr>
                <tr>
                  <td className="c-l">2018/1/9</td>
                  <td className="c-l">2018/1/12</td>
                  <td className="c-l">還付金</td>
                  <td className="c-l"> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td>21 </td>
                </tr>
                <tr>
                  <td className="c-l">2018/1/9</td>
                  <td className="c-l">2018/1/12</td>
                  <td className="c-l">現物</td>
                  <td className="c-l">ハザマ</td>
                  <td>100</td>
                  <td>80円</td>
                  <td>8,210</td>
                  <td>8,000</td>
                  <td>210</td>
                  <td>29</td>
                  <td>12</td>
                  <td></td>
                </tr>
                <tr>
                  <td className="c-l">2018/1/9</td>
                  <td className="c-l">2018/1/12</td>
                  <td className="c-l">信用</td>
                  <td className="c-l">大成建設</td>
                  <td>100</td>
                  <td>111円</td>
                  <td>10,999</td>
                  <td>11,100</td>
                  <td><span className="u-minus">-101</span></td>
                  <td>0</td>
                  <td>0</td>
                  <td>	</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="u-mt20p">
            <ul className="c-pagination">
              <li className="active"><a>1</a></li>
              <li><a href="">2</a></li>
              <li><a href="">3</a></li>
              <li><a href="">4</a></li>
              <li><a href="">5</a></li>
              <li className="disabled"><a>…</a></li>
              <li><a href="">次</a></li>
              <li><a href="">最後</a></li>
            </ul>
          </div>
        </div>
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">特定口座<b> 年間損益</b></div>
          </div>
          <div className="c-table-responsive">
            <table className="c-table c-table_stripe">
              <thead>
                <tr>
                  <th className="w_20"></th>
                  <th className="w_20">年間損益額</th>
                  <th className="w_20">源泉徴収税額</th>
                  <th className="w_20">国税</th>
                  <th className="w_20">地方税</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>2018年</th>
                  <td>61円</td>
                  <td>0</td>
                  <td>0 </td>
                  <td>0 </td>
                </tr>
                <tr>
                  <th>2017年</th>
                  <td>0 </td>
                  <td>0 </td>
                  <td>0 </td>
                  <td>0</td>
                </tr>
                <tr>
                  <th>2016年</th>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">特定口座<b> 年間配当金</b></div>
            <div className="p-section_header_aside">*その年の還付税額は年末時点の特定口座年間損益と通算され翌年の1月中頃に入金となります。</div>
          </div>
          <div className="c-table-responsive">
            <table className="c-table c-table_stripe w_80">
              <thead>
                <tr>
                  <th className="w_25"> </th>
                  <th className="w_25">配当額</th>
                  <th className="w_25">源泉徴取税額</th>
                  <th className="w_25">還付税額*</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>2018年</th>
                  <td>1000円</td>
                  <td>200円</td>
                  <td>13円</td>
                </tr>
                <tr>
                  <th>2017年</th>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <th>2016年</th>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default TradeTax;