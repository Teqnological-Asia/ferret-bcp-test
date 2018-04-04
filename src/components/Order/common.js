export const tradeTypes = {
  'equity': '現物',
  'margin_open': '信用(新規)',
  'margin_close': '信用(返済)'
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

export const expiration_type = {
  'day': '当日注文',
  'gtd or gtc':  '期限付注文'
};

export const report_types = ['fill', 'partial_fill'];