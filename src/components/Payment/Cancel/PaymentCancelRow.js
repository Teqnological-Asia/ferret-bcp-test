import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../../utils';
import { renderAmount } from '../common';

const PaymentCancelRow = ({payment}) => {
  return (
    <tr>
      <td className="c-action">
        <Link className="icon-cancel-circled" to={`/account/payment/${payment.id}/cancel/confirm`}>
          <span>取り消す</span>
        </Link>
      </td>
      <td className="c-l" data-name="受渡日">{formatDate(payment.delivery_date)}</td>
      <td className="c-l" data-name="種別">出金</td>
      <td data-name="受渡金額">{renderAmount(payment.amount)}</td>
    </tr>
  );
}

export default PaymentCancelRow;