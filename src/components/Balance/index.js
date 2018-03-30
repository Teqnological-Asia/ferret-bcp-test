import React, { Component } from 'react';

import TradeCapacitiesSummary from './TradeCapacitiesSummary';
import TradeCapacitiesHead from './TradeCapacitiesHead';
import TradeCapacitiesRow from './TradeCapacitiesRow';

class Balance extends Component {
  componentWillMount() {
    this.props.loadBalanceRequest();
  }

  extractListDate() {
    var listDate = [];
    var tradeCapacities = this.props.tradeCapacities;
    for (var i = 0; i < tradeCapacities.length; i++) {
      listDate.push(tradeCapacities[i]["date"]);
    }
    return listDate;
  }

  extractWithdrawable() {
    var listWithdrawable = [];
    var tradeCapacities = this.props.tradeCapacities;
    for (var i = 0; i < tradeCapacities.length; i++) {
      listWithdrawable.push(tradeCapacities[i]["withdrawable"]);
    }
    return listWithdrawable;
  }

  render() {
    return (
      <div className="l-contents_body_inner">
        <TradeCapacitiesSummary tradeCapacities={this.props.tradeCapacities}/>

        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">出金可能額 <b>詳細</b></div>
          </div>

          <div className="c-table-responsive">
            <table className="c-table_d">
              <TradeCapacitiesHead tradelistDate={this.extractListDate()} />
              <TradeCapacitiesRow tradelistWithdrawable={this.extractWithdrawable()} />
            </table>
          </div>
          {/*
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
          */}
        </div>
        {/*
        <div className="u-mt40p">
          <div className="p-section_header">
            <div className="p-section_header_title">信用保証金 <b>詳細</b></div>
            {/*
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
                  <td>0 </td>
                  <td>195,000 </td>
                  <td>195,000 </td>
                  <td>195,000</td>
                </tr>
                <tr>
                  <th>保証金請求</th>
                  <td>195,000</td>
                  <td>195,000</td>
                  <td>195,000</td>
                  <td>195,000</td>
                </tr>
                <tr>
                  <th>預り金不足</th>
                  <td>195,000</td>
                  <td>195,000</td>
                  <td>195,000</td>
                  <td>195,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="u-mt10p">
            <p className="u-13px">※追加保証金、保証金請求、預り金不足については受渡日の15:00までにご入金が必要です。</p>
          </div>
        </div>
        */}
      </div>
    )
  }
}

export default Balance;
