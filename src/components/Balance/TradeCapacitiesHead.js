import React from 'react';
import { formatDate } from '../../utils';

const TradeCapacitiesHead = ({tradelistDate}) => {
  if (tradelistDate === undefined || tradelistDate.length === 0) {
    return null;
  }

  const listItems = tradelistDate.map((xDate) =>
    <td key={xDate.toString()}> {formatDate(xDate)} </td>
  );

  return (
    <thead>
      <tr>
        <th>受渡日</th>
        {listItems}
      </tr>
    </thead>
  );
}

export default TradeCapacitiesHead;
