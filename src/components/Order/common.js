import { formatCurrency, formatDate } from '../../utils';

export const tradeTypes = {
  'equity': '現物',
  'margin_open': '信用新規',
  'margin_close': '信用返済'
};

export const statuses = {
  'new': '発注待ち',
  'acknowledged': '未約定',
  'partial_filled': '一部約定',
  'filled': '全部約定',
  'cancelled': '取消完了',
  'rejected': '受付エラー',
  'expired': '失効'
};

export const sides = {
  'buy': '現物買い',
  'sell': '現物売り'
};

export const types = {
  'market': '成行',
  'limit': '指値'
};

export const reportTypes = ['fill', 'partial_fill'];

export const formatTradeType = (order) => {
  const tradeType = tradeTypes[order.trade_type];
  const suffix = order.side === "sell" ? '売' : '買';
  
  return `${tradeType}${suffix}`;
}

export const formatPrice = (order) => {
  return (order.order_type === "limit") ? `指値${formatCurrency(order.order_price)}円` : "成行";
}

export const formatExpirationDate = (order) => {
  return (order.expiration_type === 'day') ? "当日中" : formatDate(order.expiration_date);
}