import React from 'react';
import { formatCurrency } from '../../utils';

const TradeCapacitiesRow = ({tradelistWithdrawable}) => {
  if (tradelistWithdrawable === undefined ||
    tradelistWithdrawable.length === 0) {
    return null;
  }
  const listItems = tradelistWithdrawable.map((withdrawable, key) =>
    <td key={key}> {formatCurrency(withdrawable)}円</td>
  );

  return (
    <tbody>
      <tr>
        <th>出金可能額</th>
        {listItems}
      </tr>
    </tbody>
  );
}

export default TradeCapacitiesRow;
