import React from 'react';
import { formatNumber, formatDate, formatTime } from '../../../utils';
import { report_types } from '../common';

const OrderDetailEvent = ({events}) => {
  const listItems = events.map((event, event_time) =>
    (report_types.indexOf(event.report_type) !== -1) &&
    <tr key={event_time}>
      <th>
        {formatDate(event.event_time)}
        <br className="only_sp"/> {formatTime(event.event_time)}
      </th>
      <td>{event.executed_quantity}</td>
      <td>{formatNumber(event.executed_price)}</td>
      <td></td>
      <td></td>
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