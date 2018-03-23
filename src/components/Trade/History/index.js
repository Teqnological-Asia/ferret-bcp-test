import React, { Component } from 'react';

class TradeHistory extends Component {
  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">取引履歴</div>
            <div className="p-section_header_aside">※前日までのお取引が表示されます。</div>
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
              <div className="p-section_search_item_head">
                <label>表示</label>
              </div>
              <div className="p-section_search_item_body">
                <label className="p-form-object_label">
                  <input type="checkbox"/>すべて
                </label>
                <label className="p-form-object_label">
                  <input type="checkbox"/>現物
                </label>
                <label className="p-form-object_label">
                  <input type="checkbox"/>制度信用
                </label>
                <label className="p-form-object_label">
                  <input type="checkbox"/>一般信用
                </label>
                <label className="p-form-object_label">
                  <input type="checkbox"/>譲渡益税
                </label>
                <label className="p-form-object_label">
                  <input type="checkbox"/>入出庫
                </label>
                <label className="p-form-object_label">
                  <input type="checkbox"/>配当金
                </label>
                <label className="p-form-object_label">
                  <input type="checkbox"/>入金
                </label>
                <label className="p-form-object_label">
                  <input type="checkbox"/>出金
                </label>
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
                  <th className="c-l">種別</th>
                  <th className="c-l">区分</th>
                  <th className="c-l">売買</th>
                  <th className="c-l">銘柄</th>
                  <th className="c-r">数量</th>
                  <th className="c-r">約定単価</th>
                  <th className="c-r">手数料等</th>
                  <th className="c-r">受渡金額</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="c-l">2018/1/9</td>
                  <td className="c-l">2018/1/12</td>
                  <td className="c-l">譲渡益税</td>
                  <td className="c-l">還付</td>
                  <td className="c-l"> </td>
                  <td className="c-l"> </td>
                  <td className="c-l"> </td>
                  <td className="c-l"> </td>
                  <td className="c-l"> </td>
                  <td className="c-r">22</td>
                </tr>
                <tr>
                  <td className="c-l">2018/1/9</td>
                  <td className="c-l">2018/1/12</td>
                  <td className="c-l">現物</td>
                  <td className="c-l">特定</td>
                  <td className="c-l">売</td>
                  <td className="c-l">鹿島建設</td>
                  <td className="c-r">100</td>
                  <td className="c-r">64.3</td>
                  <td className="c-r"> </td>
                  <td className="c-r">6,430</td>
                </tr>
                <tr>
                  <td className="c-l">2018/1/9</td>
                  <td className="c-l">2018/1/12</td>
                  <td className="c-l">現物</td>
                  <td className="c-l">特定</td>
                  <td className="c-l">買</td>
                  <td className="c-l">鹿島建設</td>
                  <td className="c-r">100</td>
                  <td className="c-r">65.1</td>
                  <td className="c-l"> </td>
                  <td className="c-r"><span className="u-minus">-6,510</span></td>
                </tr>
                <tr>
                  <td className="c-l">2018/1/11</td>
                  <td className="c-l">2018/1/12</td>
                  <td className="c-l">譲渡益税</td>
                  <td className="c-l">源泉徴収</td>
                  <td className="c-l"> </td>
                  <td className="c-l"> </td>
                  <td className="c-l"> </td>
                  <td className="c-l"> </td>
                  <td className="c-l"> </td>
                  <td className="c-r"><span className="u-minus">-22</span></td>
                </tr>
                <tr>
                  <td className="c-l">2018/1/11</td>
                  <td className="c-l">2018/1/8</td>
                  <td className="c-l">現物</td>
                  <td className="c-l">特定</td>
                  <td className="c-l">売</td>
                  <td className="c-l">ハザマ</td>
                  <td className="c-r">100</td>
                  <td className="c-r">82.1</td>
                  <td className="c-l"> </td>
                  <td className="c-r">8,210</td>
                </tr>
                <tr>
                  <td className="c-l">2018/1/11</td>
                  <td className="c-l">2018/1/8</td>
                  <td className="c-l">現物</td>
                  <td className="c-l">特定</td>
                  <td className="c-l">買</td>
                  <td className="c-l">ハザマ</td>
                  <td className="c-r">100</td>
                  <td className="c-r">79.2</td>
                  <td className="c-l"> </td>
                  <td className="c-r"><span className="u-minus">-7,920</span></td>
                </tr>
                <tr>
                  <td className="c-l">2018/1/8</td>
                  <td className="c-l">2018/1/8</td>
                  <td className="c-l">出金</td>
                  <td className="c-l">お客様口座</td>
                  <td className="c-l"> </td>
                  <td className="c-l"> </td>
                  <td className="c-r"> </td>
                  <td className="c-r"> </td>
                  <td className="c-r"> </td>
                  <td className="c-r"><span className="u-minus">-1,901</span></td>
                </tr>
                <tr>
                  <td className="c-l">2018/1/8</td>
                  <td className="c-l">2018/1/8</td>
                  <td className="c-l">出金</td>
                  <td className="c-l">手数料</td>
                  <td className="c-l"> </td>
                  <td className="c-l">他社移管手数料</td>
                  <td className="c-l"> </td>
                  <td className="c-l"> </td>
                  <td className="c-r"><span className="u-minus">1,080</span></td>
                  <td className="c-r"><span className="u-minus">-1,080</span></td>
                </tr>
                <tr>
                  <td className="c-l">2018/1/8</td>
                  <td className="c-l">2018/1/8</td>
                  <td className="c-l">配当金</td>
                  <td className="c-l">比例配分</td>
                  <td className="c-l"> </td>
                  <td className="c-l">配当金（清水建設）</td>
                  <td className="c-r"> </td>
                  <td className="c-r"> </td>
                  <td className="c-r"> </td>
                  <td className="c-r">800</td>
                </tr>
                <tr>
                  <td className="c-l">2018/1/8</td>
                  <td className="c-l">2018/1/4</td>
                  <td className="c-l">入金</td>
                  <td className="c-l">バーチャル</td>
                  <td className="c-l"> </td>
                  <td className="c-l"> </td>
                  <td className="c-r"> </td>
                  <td className="c-r"> </td>
                  <td className="c-r"> </td>
                  <td className="c-r">10,500</td>
                </tr>
                <tr>
                  <td className="c-l">2018/1/4</td>
                  <td className="c-l">2018/1/1</td>
                  <td className="c-l">制度信用</td>
                  <td className="c-l">特定</td>
                  <td className="c-l">決済　売</td>
                  <td className="c-l">大成建設</td>
                  <td className="c-r">100</td>
                  <td className="c-r">110</td>
                  <td className="c-r">1</td>
                  <td className="c-r"><span className="u-minus">-99</span></td>
                </tr>
                <tr>
                  <td className="c-l">2018/1/1</td>
                  <td className="c-l">2018/1/4</td>
                  <td className="c-l">制度信用</td>
                  <td className="c-l">特定</td>
                  <td className="c-l">新規　買</td>
                  <td className="c-l">大成建設</td>
                  <td className="c-r">100</td>
                  <td className="c-r">111</td>
                  <td className="c-r"> </td>
                  <td className="c-r"> </td>
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
      </div>
    );
  }
}

export default TradeHistory;