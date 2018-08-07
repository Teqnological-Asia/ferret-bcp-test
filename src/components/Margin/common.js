import React from 'react'
import { formatCurrency } from '../../utils'
import { BUTTON_TYPE } from '../../constants/margin'

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

export const transactionByButtonType = buttonType => {
  const { ORDER_BUY, ORDER_SELL, SWAP_BUY, SWAP_SELL } = BUTTON_TYPE
  switch (buttonType) {
    case ORDER_BUY: return '信用返済売'
    case ORDER_SELL: return '信用返済買'
    case SWAP_BUY: return '現渡'
    case SWAP_SELL: return '現引'
    default: return null
  }
}
