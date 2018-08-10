import React from 'react';
import { formatCurrency, formatDate, formatTime } from '../../../utils';
import { reportTypes } from '../common';

const OrderDetailEvent = ({events}) => {
  const formatImprovement = (event) => {
    if (event.is_executed_market_dark_pool) {
      const improvement = Math.abs(parseFloat(event.reference_price) - parseFloat(event.executed_price));
      return formatCurrency(improvement, 4)
    } else {
      return "0";
    }
  }

  const formatImprovementAmount = (event) => {
    if (event.is_executed_market_dark_pool) {
      const abs = Math.abs(parseFloat(event.reference_price) - parseFloat(event.executed_price));
      const improvementAmount = abs * parseFloat(event.executed_quantity) - (parseFloat(event.fee) + parseFloat(event.tax))
      return formatCurrency(improvementAmount, 4);
    } else {
      return "0";
    }
  }

  const listItems = events.map((event, event_time) =>
    (reportTypes.indexOf(event.report_type) !== -1) &&
    <tr key={event_time}>
      <th>
        {formatDate(event.event_time)}
        <br className="only_sp"/> {formatTime(event.event_time)}
      </th>
      <td>{formatCurrency(event.executed_quantity, 0)}</td>
      <td>{formatCurrency(parseFloat(event.executed_price), 4)}円</td>
      <td>{formatImprovement(event)}</td>
      <td>{formatImprovementAmount(event)}円</td>
    </tr>
  );

  return (
    <table className="c-table_d">
      <thead>
        <tr>
          <th>約定時間</th>
          <td>出来数量</td>
          <td>約定値段</td>
          <td>改善幅</td>
          <td>改善金額</td>
        </tr>
      </thead>
      <tbody>
        {listItems}
      </tbody>
    </table>
  );
}

export default OrderDetailEvent;