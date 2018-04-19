import React from 'react';
import { Link } from 'react-router-dom';
import { formatTime, formatDate } from '../../utils';
import { statuses, formatExpirationDate, formatPrice, formatTradeType } from './common';

const OrderRow = ({order}) => {
  const renderTradeType = (order) => {
    const className = order.side === 'sell' ? 'u-buy' : 'u-sell';

    return (
      <span className={className}>{formatTradeType(order)}</span>
    );
  }

  const renderStatusLink = (order) => {
    return (
      <Link className="c-u" to={`/account/order/${order.order_id}/detail`}>{statuses[order.order_status]}</Link>
    );
  }

  return (
    <tr>
      <td className="c-action">
        {order.is_cancelable && (
          <Link className="icon-cancel-circled" to={`/account/order/${order.order_id}/cancel`}>
            <span>取り消す</span>
          </Link>
        )}
      </td>
      <td className="c-l" data-name="銘柄コード">{order.stock_code}</td>
      <td className="c-l" data-name="銘柄">{order.stock_name}</td>
      <td className="c-l" data-name="区分">{renderTradeType(order)}</td>
      <td className="c-l" data-name="取引時間">
        {formatDate(order.order_time)}<br/>
        {formatTime(order.order_time)}<br/>
      </td>
      <td data-name="取引数量">{order.order_quantity}</td>
      <td className="c-l" data-name="（出来済）">({order.filled_quantity})</td>
      <td className="c-l" data-name="取引状況">{renderStatusLink(order)}</td>
      <td className="c-l" data-name="取引条件">{formatPrice(order)}</td>
      <td className="c-l" data-name="有効期限">{formatExpirationDate(order)}</td>
    </tr>
  );
}

export default OrderRow;