import React from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils';

export const accountTypes = {
  'specific': '特定預り',
  'general': '一般預り',
  'exemptive': 'NISA預り'
};

export const formatQuantities = (physical) => {
  return physical.ordering_quantity > 0
    ? `${physical.balance_quantity} (${physical.ordering_quantity})`
    : physical.balance_quantity;
}

export const renderSellButton = (physical) => {
  if (physical.is_shortable && !physical.is_delisted) {
    return <Link className="c-button c-button_small c-button_sell" to={`/account/physical/${physical.stock_code}/order`}>売却</Link>;
  }

  return null;
}

const PhysicalRow = ({physical}) => {
  return (
    <tr>
      <td className="c-l c-code">{physical.stock_code}</td>
      <td className="c-l c-title">{physical.stock_name}</td>
      <td className="c-l">{accountTypes[physical.account_type]}</td>
      <td>{formatQuantities(physical)}</td>
      <td>{formatCurrency(physical.book_unit_price)}円</td>
      <td></td>
      <td>
        {/* <span className="u-minus">-5000</span> */}
      </td>
      <td className="c-c">
        {renderSellButton(physical)}
      </td>
    </tr>
  );
}

export default PhysicalRow;