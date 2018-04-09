import React from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils';

export const accountTypes = {
  'specific': '特定預り',
  'general': '一般預り',
  'exemptive': 'NISA預り'
};

const PhysicalRow = ({physical}) => {
  const formattedQuantities = physical.ordering_quantity > 0 ? `${physical.balance_quantity} (${physical.ordering_quantity})` : physical.balance_quantity;
  const renderSellButton = (physical.is_shortable && !physical.is_delisted) && (
    <Link className="c-button c-button_small c-button_sell" to={`/account/physical/${physical.stock_code}/order`}>売却</Link>
  );
  const formattedValuation = (physical.balance_quantity != null && physical.current_price != null) && (
    `${formatCurrency(physical.balance_quantity * physical.current_price)}円`
  );
  const renderLossValuation = physical => {
    if (physical.balance_quantity == null || physical.current_price == null) return null;

    const number = physical.balance_quantity * (physical.current_price - physical.book_unit_price);
    if (number >= 0) {
      return number;
    } else {
      return <span className="u-minus">{number}</span>;
    }
  };

  return (
    <tr>
      <td className="c-l c-code">{physical.stock_code}</td>
      <td className="c-l c-title">{physical.stock_name}</td>
      <td className="c-l">{accountTypes[physical.account_type]}</td>
      <td>{formattedQuantities}</td>
      <td>{formatCurrency(physical.book_unit_price)}円</td>
      <td>{formattedValuation}</td>
      <td>{renderLossValuation(physical)}</td>
      <td className="c-c">{renderSellButton}</td>
    </tr>
  );
}

export default PhysicalRow;