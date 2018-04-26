import React from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils';

export const accountTypes = {
  'specific': '特定預り',
  'general': '一般預り',
  'exemptive': 'NISA預り'
};

const PhysicalRow = ({physical}) => {
  const isSellable = (physical.is_shortable && !physical.is_delisted && parseFloat(physical.shortable_quantity) >= parseFloat(physical.trade_unit));
  const formattedQuantities = physical => {
    if (physical.ordering_quantity == null || physical.balance_quantity == null) return '-';

    return physical.ordering_quantity > 0 ? `${formatCurrency(physical.balance_quantity)} (${formatCurrency(physical.ordering_quantity)})` : formatCurrency(physical.balance_quantity);
  }
  const renderSellButton = isSellable && (
    <Link className="c-button c-button_small c-button_sell" to={`/account/physical/${physical.stock_code}/order`}>売却</Link>
  );
  const formattedValuation = (physical.balance_quantity != null && physical.current_price != null) && (
    `${formatCurrency(physical.balance_quantity * physical.current_price)}円`
  );
  const renderLossValuation = physical => {
    if (physical.balance_quantity == null || physical.current_price == null) return '-';

    const number = physical.balance_quantity * (physical.current_price - physical.book_unit_price);
    if (number >= 0) {
      return `${formatCurrency(number)}円`;
    } else {
      return <span className="u-minus">{formatCurrency(number)}円</span>;
    }
  };
  const formattedTotalAmount = physical.balance_quantity * physical.book_unit_price;

  return (
    <tr className={!isSellable ? 'c-disable' : ''}>
      <td className="c-l c-code">{physical.stock_code}</td>
      <td className="c-l c-title" data-name={physical.stock_code}>{physical.stock_name}</td>
      <td className="c-l" data-name="区分">{accountTypes[physical.account_type]}</td>
      <td data-name="数量/（取引中）">{formattedQuantities(physical)}</td>
      <td data-name="取得単価">{formatCurrency(physical.book_unit_price)}円</td>
      <td data-name="取得額">{formatCurrency(formattedTotalAmount)}円</td>
      <td data-name="時価評価額">{formattedValuation || '-'}円</td>
      <td data-name="評価損益">{renderLossValuation(physical)}円</td>
      <td className="c-c">{renderSellButton}</td>
    </tr>
  );
}

export default PhysicalRow;