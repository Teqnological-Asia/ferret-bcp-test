import React, { Component } from 'react';
import { formatDate, formatCurrency } from '../../utils'
import { name, accountType, quantity, renderLossValuation, entryPrice } from './common'
import ReactTooltip from 'react-tooltip'

class MarginRow extends Component {
  render() {
    const { position, clickMarginButton, id } = this.props
    const buttonClass = position.side === 'sell' ? 'c-button_buy' : 'c-button_sell'
    const path = `/account/margin/${position.stock_code}/select`
    const isEnable = position.quantity - position.ordering_quantity > 0
    const disableClass = isEnable ? '' : 'c-disable'
    return (
      <tr className={disableClass}>
        <td className="c-l" data-name="銘柄コード" data-for={`tooltip-${id}`} data-tip>{position.stock_code}</td>
        <td className="c-l" data-name="銘柄" data-for={`tooltip-${id}`} data-tip>{name(position)}</td>
        <td className="c-l" data-name="区分" data-for={`tooltip-${id}`} data-tip>{accountType(position)}</td>
        <td className="c-l" data-name="建日" data-for={`tooltip-${id}`} data-tip>{formatDate(position.entry_date)}</td>
        <td data-name="数量/（取引中）" data-for={`tooltip-${id}`} data-tip>{quantity(position)}</td>
        <td data-name="平均建単価" data-for={`tooltip-${id}`} data-tip>{entryPrice(position)}円</td>
        <td data-name="評価損益" data-for={`tooltip-${id}`} data-tip>
          {renderLossValuation(position)}
          <ReactTooltip id={`tooltip-${id}`} place="bottom" type="info">
            <span>信用金利：{formatCurrency(position.junhibu, 0)}円</span>
            <span>逆日歩：{formatCurrency(position.gyakuhibu, 0)}円</span>
            <span>貸株料：{formatCurrency(position.stock_lending_fee, 0)}円</span><br/>
            <span>最終売買日：{formatDate(position.last_tradable_date)}</span>
            <span>権利処理手数料：{formatCurrency(position.name_transfer_fee, 0)}円</span>
            <span>管理料：{formatCurrency(position.administration_fee, 0)}円</span>
          </ReactTooltip>
        </td>
        <td className="c-c">
          {
            isEnable ?
            <a
              className="c-button c-button_small c-button_actual"
              onClick={() => clickMarginButton(`swap_${position.side}`, path)}
            >
              現{position.side === 'buy' ? '引' : '渡'}
            </a>
            : null
          }
        </td>
        <td className="c-c">
          {
            isEnable ?
            <a
              className={"c-button c-button_small " + buttonClass}
              onClick={() => clickMarginButton(`order_${position.side}`, path)}
            >
              返済{position.side === 'buy' ? '売' : '買'}
            </a>
            : null
          }
        </td>
      </tr>
    )
  }
}

export default MarginRow;