import React from 'react';
import { Link } from 'react-router-dom';
import { formatTime, formatDate } from '../../utils';

const OrderRow = ({order}) => {
  const formatPrice = (order) => {
    return order.order_type === 'limit' ? `指値${order.order_price}円` : '成行';
  }

  const formatExpirationDate = (order) => {
    return order.expiration_type === 'day' ? '当日中' : formatDate(order.expiration_date);
  }

  const renderTradeType = (order) => {
    const tradeTypes = {
      'equity': '現物',
      'margin_open': '信用(新規)',
      'margin_close': '信用(返済)'
    };

    if (order.side === 'sale') {
      return (
        <span className="u-sell">
          {tradeTypes[order.trade_type]}
          <br/>
          売
        </span>
      );
    }

    return (
      <span className="u-buy">
        {tradeTypes[order.trade_type]}
        <br/>
        買
      </span>
    );
  }

  const renderStatusLink = (order) => {
    const statuses = {
      'new': '注文中',
      'acknowledged': '注文中(市場の板には乗った状態)',
      'partial_filled': '出来あり',
      'filled': '約定',
      'cancelled': '取消済',
      'rejected': '受付エラー等',
      'expired': '失効'
    };

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
