import React, { Component } from 'react';
import { formatDate, formatCurrency } from '../../utils'
import { Link } from 'react-router-dom'

class MarginRow extends Component {
  render() {
    const position = this.props.position
    const name = position => {
      const stockName = position.stock_name
      const side = position.side === 'buy' ? '買建' : '売建'
      const marginTradeType = position.margin_trade_type === 'system' ? '制度信用' : '一般信用'
      return `${stockName}/${side}/${marginTradeType}`
    }
    const accountType = position => (
      position.account_type === 'specific' ? '特定' : '一般'
    )
    const quantity = position => {
      const orderingQuantity = position.ordering_quantity !== '0' ? `/ (${position.ordering_quantity})` : ''
      return position.quantity + orderingQuantity
    }
    const renderLossValuation = position => {
      if (position.profit == null) return '-';

      const result = Number(position.profit).toFixed(2);

      if (position.profit >= 0) {
        return `${formatCurrency(result)}`;
      } else {
        return <span className="u-minus">{formatCurrency(result)}</span>;
      }
    };

    const buttonClass = position.side === 'sell' ? 'c-button_buy' : 'c-button_sell'

    return (
      <tr>
        <td className="c-l" data-name="銘柄コード">{position.stock_code}</td>
        <td className="c-l" data-name="銘柄">{name(position)}</td>
        <td className="c-l" data-name="区分">{accountType(position)}</td>
        <td className="c-l" data-name="建日">{formatDate(position.entry_date)}</td>
        <td data-name="数量/（取引中）">{quantity(position)}</td>
        <td data-name="平均建単価">{formatCurrency(position.entry_price)}円</td>
        <td data-name="評価損益">{renderLossValuation(position)}</td>
        <td className="c-c">
          <Link className="c-button c-button_small c-button_actual" to={`/account/margin/${position.stock_code}/select`}>
            現{position.side === 'buy' ? '引' : '渡'}
          </Link>
        </td>
        <td className="c-c">
          <Link className={"c-button c-button_small " + buttonClass} to={`/account/margin/${position.stock_code}/select`}>
            返済{position.side === 'buy' ? '売' : '買'}
          </Link>
        </td>
      </tr>
    )
  }
}

export default MarginRow;