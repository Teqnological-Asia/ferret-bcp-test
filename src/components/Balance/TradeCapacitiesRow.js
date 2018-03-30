import React from 'react';

const TradeCapacitiesRow = ({tradelistWithdrawable}) => {
  if (tradelistWithdrawable == undefined || tradelistWithdrawable.length == 0) {
    return null;
  }

  const listItems = tradelistWithdrawable.map((withdrawable) =>
    <td key={withdrawable.toString()}> {withdrawable} </td>
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
