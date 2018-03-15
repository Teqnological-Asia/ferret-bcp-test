import React, { Component } from 'react';

class OrderDetail extends Component {
  render() {
    return (
      <div className="l-contents">
        <div className="l-contents_head">
          <div className="p-pageTitle">
            <div className="p-pageTitle_head">
              <div className="p-pageTitle_title">障害時取引メニュー<span className="p-pageTitle_separate"></span>注文照会</div>
            </div>
            <div className="p-pageTitle_body">
              <div className="p-nav_sub">
                <ul>
                  <li><a href="3-1.html">現物株式売却</a></li>
                  <li><a href="3-2.html">信用決済</a></li>
                  <li className="is_current"><a href="3-3.html">注文照会</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="l-contents_body">
          <div className="l-contents_body_inner">
            <div className="u-mt40p">
              <div className="p-section_header">
                <div className="p-section_header_title">取引 <b>詳細</b></div>
              </div>
            </div>
            <div className="u-mt20p">
              <div className="p-section_info">
                <div className="p-section_info_head">
                  <div className="p-section_info_number">(6501)</div>
                  <div className="p-section_info_title">日立</div>
                  <div className="p-section_info_date">
                    <div className="p-section_info_attr">発注時間:</div>
                    <div className="p-section_info_value">2018/1/8 17:23</div>
                    <div className="p-section_info_attr">有効期限:</div>
                    <div className="p-section_info_value">2018/1/16</div>
                  </div>
                </div>
                <div className="p-section_info_body">
                  <div className="p-section_info_section">
                    <div className="p-section_info_attr">区分</div>
                    <div className="p-section_info_value"><span className="u-sell">現物 売</span></div>
                  </div>
                  <div className="p-section_info_val">
                    <div className="p-section_info_attr">取引数量</div>
                    <div className="p-section_info_value en"><span className="num">1000</span></div>
                  </div>
                  <div className="p-section_info_val_done">
                    <div className="p-section_info_attr">出来済</div>
                    <div className="p-section_info_value en"><span className="num">1000</span></div>
                  </div>
                  <div className="p-section_info_status">
                    <div className="p-section_info_attr">取引状況</div>
                    <div className="p-section_info_value">全部出来</div>
                  </div>
                  <div className="p-section_info_condition">
                    <div className="p-section_info_attr">取引条件</div>
                    <div className="p-section_info_value">成行</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-mt20p">
              <div className="c-table-responsive">
                <table className="c-table_d">
                  <thead>
                    <tr>
                      <th>約定時間</th>
                      <td>出来数量</td>
                      <td>約定値段</td>
                      <td>改善幅</td>
                      <td>改善金額</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>2018/1/17 <br className="only_sp"/>13:26</th>
                      <td>500</td>
                      <td>751円</td>
                      <td>0.1</td>
                      <td>100円</td>
                    </tr>
                    <tr>
                      <th>2018/1/17 <br className="only_sp"/>13:27</th>
                      <td>200</td>
                      <td>750円</td>
                      <td>0</td>
                      <td>0円</td>
                    </tr>
                    <tr>
                      <th>2018/1/17 <br className="only_sp"/>13:27</th>
                      <td>300</td>
                      <td>749円</td>
                      <td>0</td>
                      <td>0円</td>
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

export default OrderDetail;