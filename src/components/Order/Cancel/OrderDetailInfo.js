import React from 'react';
import { formatTradeType, formatPrice, formatExpirationDate } from '../common';

const OrderDetailInfo = ({order}) => {
  if (!order) return null;

  return (
    <table className="c-table_d c-table_confirm">
      <tbody>
        <tr>
          <th>銘柄コード</th>
          <td>{order.stock_code}/{order.stock_name}</td>
        </tr>
        {/* <tr>
          <th>市場</th>
          <td>当社最良執行市場</td>
        </tr> */}
        <tr>
          <th>取引</th>
          <td>{formatTradeType(order)}</td>
        </tr>
        <tr>
          <th>取引株数</th>
          <td>{order.order_quantity}株</td>
        </tr>
        <tr>
          <th>執行条件・単価</th>
          <td>{formatPrice(order)}</td>
        </tr>
        <tr>
          <th>取引期限</th>
          <td>{formatExpirationDate(order)}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default OrderDetailInfo;