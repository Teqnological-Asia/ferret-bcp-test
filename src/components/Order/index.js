import React, { Component } from 'react';

class Order extends Component {
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
                <div className="p-section_header_title">注文 <b>照会</b></div>
              </div>
            </div>
            <div className="p-section_lead u-mt20p">
              <p className="p-no_item">0 item（表示する内容がない場合　文言要確認）</p>
            </div>
            <div className="u-mt20p">
              <table className="c-table_list">
                <thead>
                  <tr>
                    <th className="c-action"></th>
                    <th className="c-l">銘柄コード</th>
                    <th className="c-l">銘柄</th>
                    <th className="c-l">区分</th>
                    <th className="c-l">取引時間</th>
                    <th>取引数量</th>
                    <th className="c-l">（出来済）</th>
                    <th className="c-l">取引状況</th>
                    <th className="c-l">取引条件</th>
                    <th className="c-l">有効期限</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="c-buyblock">
                    <td className="c-action"><a className="icon-cancel-circled" href="3-3-2.html"><span>取り消す</span></a></td>
                    <td className="c-l" data-name="銘柄コード">2914</td>
                    <td className="c-l" data-name="銘柄">日立</td>
                    <td className="c-l" data-name="区分"><span className="u-buy">現物<br/>買</span></td>
                    <td className="c-l" data-name="取引時間"><a className="c-u" href="3-3-1.html">2018/1/8<br/>17:23</a></td>
                    <td data-name="取引数量">1000</td>
                    <td className="c-l" data-name="（出来済）">(0)</td>
                    <td className="c-l" data-name="取引状況">取引中</td>
                    <td className="c-l" data-name="取引条件">指値800円</td>
                    <td className="c-l" data-name="有効期限">2018/1/16	</td>
                  </tr>
                  <tr className="c-sellblock">
                    <td className="c-action"></td>
                    <td className="c-l" data-name="銘柄コード">6501</td>
                    <td className="c-l" data-name="銘柄">日立</td>
                    <td className="c-l" data-name="区分"><span className="u-sell">現物<br/>売</span></td>
                    <td className="c-l" data-name="取引時間"><a className="c-u" href="3-3-1.html">2018/1/8<br/>17:20</a></td>
                    <td data-name="取引数量">1000</td>
                    <td className="c-l" data-name="（出来済）">(1000)</td>
                    <td className="c-l" data-name="取引状況">全部出来</td>
                    <td className="c-l" data-name="取引条件">成行</td>
                    <td className="c-l" data-name="有効期限">2018/1/16</td>
                  </tr>
                  <tr className="c-sellblock">
                    <td className="c-action"></td>
                    <td className="c-l" data-name="銘柄コード">6501</td>
                    <td className="c-l" data-name="銘柄">日立</td>
                    <td className="c-l" data-name="区分"><span className="u-sell">現物<br/>売</span></td>
                    <td className="c-l" data-name="取引時間"><a className="c-u" href="3-3-1.html">2018/1/8<br/>17:23</a></td>
                    <td data-name="取引数量">1000</td>
                    <td className="c-l" data-name="（出来済）">(100)</td>
                    <td className="c-l" data-name="取引状況">一部出来<br/>取消済み</td>
                    <td className="c-l" data-name="取引条件">指値800円</td>
                    <td className="c-l" data-name="有効期限">2018/1/16	</td>
                  </tr>
                  <tr className="c-sellblock">
                    <td className="c-action"><a className="icon-cancel-circled" href="3-3-2.html"><span>取り消す</span></a></td>
                    <td className="c-l" data-name="銘柄コード">9432</td>
                    <td className="c-l" data-name="銘柄">NTT</td>
                    <td className="c-l" data-name="区分"><span className="u-sell">信用<br/>決済売</span></td>
                    <td className="c-l" data-name="取引時間"><a className="c-u" href="3-3-1.html">2018/1/8<br/>17:23</a></td>
                    <td data-name="取引数量">1000</td>
                    <td className="c-l" data-name="（出来済）">(500)</td>
                    <td className="c-l" data-name="取引状況">一部出来<br/>取引中</td>
                    <td className="c-l" data-name="取引条件">1500円以下<br/>成行</td>
                    <td className="c-l" data-name="有効期限">2018/1/16</td>
                  </tr>
                  <tr className="c-buyblock">
                    <td className="c-action"></td>
                    <td className="c-l" data-name="銘柄コード">8601</td>
                    <td className="c-l" data-name="銘柄">松竹</td>
                    <td className="c-l" data-name="区分"><span className="u-buy">信用<br/>決済買</span></td>
                    <td className="c-l" data-name="取引時間"><a className="c-u" href="3-3-1.html">2018/1/8<br/>17:23</a></td>
                    <td data-name="取引数量">1000</td>
                    <td className="c-l" data-name="（出来済）">(0)</td>
                    <td className="c-l" data-name="取引状況">期限切れ失効</td>
                    <td className="c-l" data-name="取引条件">1500円以上<br/>指値1600円</td>
                    <td className="c-l" data-name="有効期限">当日中</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="u-mt40p">
              <div className="p-section_lead">
                <p>※本WEBサイトは障害災害発生時専用サイトであり、現物株式の売却および信用建玉の返済の受付のみに限定させていただいております。上記「注文照会」に「現物買」「信用新規」注文が表示されている場合がありますが、当該注文は障害災害発生前に発注された注文であり、「取消」をされた場合、再度発注することはできませんので、あらかじめご了承願います。</p>
                <p>※注文の訂正はできません。訂正する場合には一旦注文の取消後、再度注文（現物株式の売却、信用取引の決済）を発注ください。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Order;