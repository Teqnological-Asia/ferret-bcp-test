import React, { Component } from 'react';

class PaymentHistory extends Component {
  render() {
    return (
      <div className="l-contents">
        <div className="l-contents_head">
          <div className="p-pageTitle">
            <div className="p-pageTitle_head">
              <div className="p-pageTitle_title">資産状況<span className="p-pageTitle_separate"></span>入出金履歴</div>
            </div>
            <div className="p-pageTitle_body">
                <div className="p-nav_sub">
                  <ul>
                    <li><a href="3.html">口座余力</a></li>
                    <li><a href="3-4.html">取引履歴</a></li>
                    <li><a href="3-4-1.html">特定口座譲渡益税／配当</a></li>
                    <li className="is_current"><a href="3-5.html">入出金履歴</a></li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
        <div className="l-contents_body">
          <div className="l-contents_body_inner">
            <div className="u-mt40p">
              <div className="p-section_header">
                <div className="p-section_header_title">入出金 <b>履歴</b></div>
                <div className="p-section_header_aside">※出金のお取り消しは前日16時まで可能です。</div>
              </div>
            </div>
            {/* if 0 */}
            <div className="p-section_lead u-mt20p">
              <p className="p-no_item">0 item（表示する内容がない場合　文言要確認）</p>
            </div>
            {/* else */}
            <div className="u-mt20p">
              <div className="p-section_search">
                <div className="p-section_search_item">
                  <div className="p-section_search_item_head">
                    <label>期間指定</label>
                  </div>
                  <div className="p-section_search_item_body">
                    <div className="p-form-object_calender">
                      <i className="icon-calendar-empty"></i>
                      <input className="dates" type="text" placeholder="2018/9/10"/>
                    </div>
                    <span>から</span>
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
            <div className="u-mt20p">
              <table className="c-table_list">
                <thead>
                  <tr>
                    <th className="c-action"></th>
                    <th className="c-l">受渡日</th>
                    <th className="c-l">種別</th>
                    <th className="c-l">振替先</th>
                    <th>受渡金額</th>
                    <th>お預り金残高（予定）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="c-action"><a className="icon-cancel-circled" href="3-5-1.html"><span>取り消す</span></a></td>
                    <td className="c-l" data-name="受渡日">2018/1/18</td>
                    <td className="c-l" data-name="種別">出金</td>
                    <td className="c-l" data-name="振替先">お客様口座への返金</td>
                    <td data-name="受渡金額"><span className="u-minus">-1,901 </span></td>
                    <td data-name="お預り金残高（予定）">（8,599円）</td>
                  </tr>
                  <tr>
                    <td className="c-action"></td>
                    <td className="c-l" data-name="受渡日">2018/1/4</td>
                    <td className="c-l" data-name="種別">入金</td>
                    <td className="c-l" data-name="振替先">バーチャル口座から入金</td>
                    <td data-name="受渡金額">10,500 </td>
                    <td data-name="お預り金残高（予定）">10,500円</td>
                  </tr>
                </tbody>
              </table>
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
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentHistory;
