import { formatCurrency } from '../../utils'

export const account_types = {
  'specific': '特定預り',
  'general': '一般預り',
  'exemptive': 'NISA預り'
};

export const request_types = {
  '1': '売却サービス',
  '2': '買取請求'
}

export const bookUnitPrice = (fractional) => {
  if (fractional.book_unit_price == null) {
    return '-'
  }
  const roundUp = Number(fractional.book_unit_price).toFixed(0)
  return formatCurrency(roundUp, 0)
}