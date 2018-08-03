import React, { Component } from 'react';
import { formatDate, formatCurrency } from '../../utils'
import { name, accountType, quantity, renderLossValuation } from './common'

class MarginRow extends Component {
  render() {
    const { position, clickMarginButton } = this.props
    const buttonClass = position.side === 'sell' ? 'c-button_buy' : 'c-button_sell'
    const path = `/account/margin/${position.stock_code}/select`
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
          <a
            className="c-button c-button_small c-button_actual"
            onClick={() => clickMarginButton(`swap_${position.side}`, path)}
          >
            現{position.side === 'buy' ? '渡' : '引'}
          </a>
        </td>
        <td className="c-c">
          <a
            className={"c-button c-button_small " + buttonClass}
            onClick={() => clickMarginButton(`order_${position.side}`, path)}
          >
            返済{position.side === 'buy' ? '売' : '買'}
          </a>
        </td>
      </tr>
    )
  }
}

export default MarginRow;