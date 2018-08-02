import React from 'react'
import { formatDate, formatCurrency } from '../../../utils'

const MarginSelectRow = (props) => {
  const { position } = props
  const name = position => {
    const stockName = position.stock_name
    const side = position.side === 'buy' ? '買建' : '売建'
    const marginTradeType = position.margin_trade_type === 'system' ? '制度信用' : '一般信用'
    return `${stockName}/${side}/${marginTradeType}`
  };
  const accountType = position => (
    position.account_type === 'specific' ? '特定' : '一般'
  );
  const renderLossValuation = position => {
    if (position.profit == null) return '-';

    const result = Number(position.profit).toFixed(2);

    if (position.profit >= 0) {
      return `${formatCurrency(result)}`;
    } else {
      return <span className="u-minus">{formatCurrency(result)}</span>;
    }
  };

  return (
    <tr>
      <td className="c-l" data-name="銘柄コード">{position.stock_code}</td>
      <td className="c-l" data-name="銘柄">{name(position)}</td>
      <td className="c-l" data-name="区分">{accountType(position)}</td>
      <td className="c-l" data-name="建日">{formatDate(position.entry_date)}</td>
      <td className="c-display_label_sp" data-name="数量">
        <div className="p-input_stockupdown">
          <div className="p-input">
            <input className="u-right" id="hoge_child" type="text" value={position.trade_quantity} placeholder="数値を入力してください"/>
          </div><span className="p-unit">株</span>
          <button className="p-input_control p-input_up" value="">UP</button>
          <hr/>
          <button className="p-input_control p-input_down" value="">DOWN</button>
        </div>
      </td>
      <td data-name="返済可能数量">{position.max_quantity}</td>
      <td data-name="平均建単価">{formatCurrency(position.entry_price)}円</td>
      <td data-name="評価損益">{renderLossValuation(position)}</td>
    </tr>
  )
}

export default MarginSelectRow