import { formatCurrency, formatDate } from '../../utils';

export const tradeTypes = {
  'equity': '現物',
  'margin_open': '信用新規',
  'margin_close': '信用返済'
};

export const statuses = {
  'new': '注文中',
  'acknowledged': '注文中(市場の板には乗った状態)',
  'partial_filled': '出来あり',
  'filled': '約定',
  'cancelled': '取消済',
  'rejected': '受付エラー等',
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
  const suffix = order.side === "sale" ? '売' : '買';
  
  return `${tradeType}${suffix}`;
}

export const formatPrice = (order) => {
  return (order.order_type === "limit") ? `指値${formatCurrency(order.order_price)}円` : "成行";
}

export const formatExpirationDate = (order) => {
  return (order.expiration_type === 'day') ? "当日中" : formatDate(order.expiration_date);
}