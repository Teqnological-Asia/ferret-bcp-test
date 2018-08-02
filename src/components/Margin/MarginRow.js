import React, { Component } from 'react';
import { formatDate, formatCurrency } from '../../utils'
import { Link } from 'react-router-dom'
import { name, accountType, quantity, renderLossValuation } from './common'

class MarginRow extends Component {
  render() {
    const position = this.props.position
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