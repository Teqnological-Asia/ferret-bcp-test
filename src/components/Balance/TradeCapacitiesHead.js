import React from 'react';

const TradeCapacitiesHead = ({tradelistDate}) => {
  if (tradelistDate == undefined || tradelistDate.length == 0) {
    return null;
  }

  const listItems = tradelistDate.map((xDate) =>
    <td key={xDate.toString()}> {xDate} </td>
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
