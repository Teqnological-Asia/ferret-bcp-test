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

  const executionTypes = {
    'none': '',
    'on_open': '寄付',
    'on_close': '引け',
    'funari': '不成'
  }

  const formatCondition = (order) => {
    if (order.order_condition_type === 'stop') {
      const suffix = order.stop_condition === 'upper' ? '以上' : '以下';
      return `${order.stop_price}円${suffix}`;
    } else {
      return executionTypes[order.execution_type];
    }
  }
  const formattedCondition = formatCondition(order);

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
        {formatDate(order.order_time)} <br/>
        {formatTime(order.order_time)}
      </td>
      <td data-name="取引数量">{order.order_quantity}</td>
      <td className="c-l" data-name="（出来済）">({order.filled_quantity || 0})</td>
      <td className="c-l" data-name="取引状況">{renderStatusLink(order)}</td>
      <td className="c-l" data-name="取引条件">
        {formattedCondition}
        {formattedCondition != '' && <br/>}
        {formatPrice(order)}
      </td>
      <td className="c-l" data-name="有効期限">{formatExpirationDate(order)}</td>
    </tr>
  );
}

export default OrderRow;