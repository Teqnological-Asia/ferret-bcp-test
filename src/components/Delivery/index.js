import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DeliveryList from './DeliveryList';
import DeliverySummary from './DeliverySummary';
import { removeElementFromArray } from '../../utils';

class Delivery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfRow: 0,
      numberOfStock: 0,
      selectedStockCodes: [],
      totalCommissionAmount: 0,
      canSubmit: true
    }
  }

  componentDidMount() {
    this.props.loadDeliveriesIndexRequest();
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleCheck = (stock_code, quantity, e) => {
    const target = e.target;

    var newNumberOfRow = this.state.numberOfRow;
    var newNumberOfStock = this.state.numberOfStock;
    var selectedStockCodes = this.state.selectedStockCodes;

    if (target.checked) {
      newNumberOfRow = newNumberOfRow + 1;
      newNumberOfStock = newNumberOfStock + quantity;
      selectedStockCodes.push(stock_code);
    } else {
      newNumberOfRow = newNumberOfRow - 1;
      newNumberOfStock = newNumberOfStock - quantity;
      removeElementFromArray(selectedStockCodes, stock_code);
    }

    var newCanSubmit = (newNumberOfRow > 0) ? false : true;
    var totalCommissionAmount = newNumberOfRow * 540;

    this.setState({
      numberOfRow: newNumberOfRow,
      numberOfStock: newNumberOfStock,
      selectedStockCodes: selectedStockCodes,
      totalCommissionAmount: totalCommissionAmount,
      canSubmit: newCanSubmit
    });
  }

  render() {
    return (
      <div className="l-contents_body_inner">
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">株式出庫 <b>口座出庫依頼書</b></div>
            <div className="p-section_header_tools">
              <ul>
                <li>
                  <Link to="/account/delivery/cancel">
                  <i className="icon-info-circled"></i>株式出庫依頼の確認へ（当日のみ）
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="u-mt20p">
          <div className="delivery-caption">口座振替申請書（一般）　兼　特定口座内保管上場株式等移管依頼書</div>
          <div className="delivery-description">租税特別措置法施行令第25条の10の２第11項の規定に基づき、下記に示す振替元の特定口座に係る特定口座内保管上場株式等を株式等振替制度による口座振替により、振替先の特定口座に振替することを依頼いたします。</div>
          <table className="c-table_d">
            <tbody>
              <tr>
                <th className="c-w25">振替指示日</th>
                <td className="c-l">
                  <div className="p-labelblock is-selected" id="ptn_block_A">
                    <label>
                      <input type="radio" name="dummy_radio" value="ptn_A" defaultChecked /><span>可能な限り早い日</span>
                    </label>
                  </div>
                  <div className="p-labelblock" id="ptn_block_B">
                    <label>
                      <input id="hoge" type="radio" name="dummy_radio" value="ptn_B" /><span>日時を指定</span>
                    </label>
                    <div className="u-mt10p">
                      <div className="p-form-object_calender is_disbale" id="hoge_parent"><i className="icon-calendar-empty"></i>
                        <input className="dates" id="hoge_child" type="text" placeholder="2018/9/10" />
                      </div>
                    </div><span className="p-subtext">※5営業日目以降の日にちをご入力ください（指定日通りに振替できないことがあります）</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th>移管先口座管理機関コード</th>
                <td className="c-l">
                  <div className="u-row">
                    <div className="u-col_25 u-col_50_sp">
                      <input className="p-form-object dummy_text" type="text" maxLength="7"/>
                    </div>
                    <div className="u-col_25 u-col_100_sp">
                      <input className="p-form-object dummy_text" type="text" maxLength="14"/>
                    </div>
                  </div>
                  <p>※機構加入者コード7桁+14桁</p>
                </td>
              </tr>
              <tr>
                <th>口座管理機関名</th>
                <td className="c-l"><a href="">金融機関名を取得する</a></td>
              </tr>
              <tr>
                <th>部支店名</th>
                <td className="c-l">
                  <input className="p-form-object dummy_text" type="text" />
                </td>
              </tr>
              <tr>
                <th>部支店の所在地</th>
                <td className="c-l">
                  <input className="p-form-object dummy_text" type="text" />
                </td>
              </tr>
              <tr>
                <th>部支店コード</th>
                <td className="c-l">
                  <div className="u-row">
                    <div className="u-col_50 u-col_100_sp">
                      <input className="p-form-object dummy_text" type="text" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>お客様口座番号</th>
                <td className="c-l">
                  <div className="u-row">
                    <div className="u-col_50 u-col_100_sp">
                      <input className="p-form-object dummy_text" type="text" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>名義人</th>
                <td className="c-l">依頼人と同じ</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="u-mt20p">
          <DeliveryList deliveries={this.props.deliveries} handleCheck={this.handleCheck} />
        </div>
        <div className="p-section_total u-mt20p">
          <DeliverySummary
            numberOfRow={this.state.numberOfRow}
            numberOfStock={this.state.numberOfStock}
            totalCommissionAmount={this.state.totalCommissionAmount}
          />
        </div>
        <div className="p-section_lead u-mt40p">
          <p>※移管1銘柄につき、1,080円（税込）の手数料をいただきます。</p>
          <p>※ご注文中、または受渡日を迎えていない銘柄は、手続きを行なうことはできません。</p>
          <p>※特定口座株式の場合、お預かりの全株式数を指定してください。一部株式数の移管はできません。</p>
          <p>※信用取引の保証金（代用有価証券）となっている銘柄の場合、保証金維持率の状況によっては移管できない場合があります。</p>
          <p>※移管先証券会社の都合で他社移管できない場合があります。（保管振替機構への加入者情報登録が行われていない場合など）</p>
          <p>※権利確定のための基準日が設定された場合、権利付最終日の15時より、移管手続を承ることができません。<br/>　ただし、決算期によっては、移管手続停止期間が、基準日の1週間前より行われる場合があります。<br/>　月の下旬に係る移管手続は承れない場合がありますのでご注意ください</p>
        </div>
        <div className="p-section_lead u-mt20p">
          <p><b>公開買付実施銘柄の他社移管についてのご注意事項</b></p>
          <p>※公開買付のための他社移管の場合、メッセージ/備考欄に「公開買付」とご入力ください。この場合手数料をいただきません。なお「公開買付」とご記入いただいた場合でも、当該銘柄が「公開買付」銘柄でない場合は、手数料を頂戴いたします。</p>
          <p>※公開買付期間最終日を含め5営業日遡った日の24時までにご依頼ください。4営業日以降は、通常の他社移管手続として取り扱います。</p>
        </div>
        <div className="u-mt20p u-center">
          <button className="c-button" onClick={this.handleSubmit} disabled={this.state.canSubmit}>出庫依頼する</button>
        </div>
      </div>
    );
  }
}

export default Delivery;
