import React from 'react'
import { formatCurrency } from '../../utils'

export const accountType = position => (
  position.account_type === 'specific' ? '特定' : '一般'
);

export const renderLossValuation = position => {
  if (position.profit == null) return '-';

  const result = Number(position.profit).toFixed(2);

  if (position.profit >= 0) {
    return `${formatCurrency(result)}`;
  } else {
    return <span className="u-minus">{formatCurrency(result)}</span>;
  }
};

export const name = position => {
  const stockName = position.stock_name
  const side = position.side === 'buy' ? '買建' : '売建'
  const marginTradeType = position.margin_trade_type === 'system' ? '制度信用' : '一般信用'
  return `${stockName}/${side}/${marginTradeType}`
};

export const quantity = position => {
  const orderingQuantity = position.ordering_quantity !== '0' ? `/ (${position.ordering_quantity})` : ''
  return position.quantity + orderingQuantity
}
