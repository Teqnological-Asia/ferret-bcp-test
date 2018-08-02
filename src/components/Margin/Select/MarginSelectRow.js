import React from 'react'
import { formatDate, formatCurrency } from '../../../utils'
import { name, accountType, renderLossValuation } from '../common'

const MarginSelectRow = (props) => {
  const { position, handleChangeQuantity } = props

  return (
    <tr>
      <td className="c-l" data-name="銘柄コード">{position.stock_code}</td>
      <td className="c-l" data-name="銘柄">{name(position)}</td>
      <td className="c-l" data-name="区分">{accountType(position)}</td>
      <td className="c-l" data-name="建日">{formatDate(position.entry_date)}</td>
      <td className="c-display_label_sp" data-name="数量">
        <div className="p-input_stockupdown">
          <div className="p-input">
            <input
              className="u-right" id="hoge_child"
              type="text" value={position.trade_quantity}
              onChange={(event) => handleChangeQuantity(position, null, event.currentTarget.value)}
              placeholder="数値を入力してください"/>
          </div><span className="p-unit">株</span>
          <button className="p-input_control p-input_up" value="" onClick={() => handleChangeQuantity(position, true)}>UP</button>
          <hr/>
          <button className="p-input_control p-input_down" value="" onClick={() => handleChangeQuantity(position, false)}>DOWN</button>
        </div>
      </td>
      <td data-name="返済可能数量">{position.max_quantity}</td>
      <td data-name="平均建単価">{formatCurrency(position.entry_price)}円</td>
      <td data-name="評価損益">{renderLossValuation(position)}</td>
    </tr>
  )
}

export default MarginSelectRow