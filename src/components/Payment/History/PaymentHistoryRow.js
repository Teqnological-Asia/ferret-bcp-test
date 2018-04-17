import React from 'react';
import { formatDate } from '../../../utils';
import { renderAmount } from '../common';

const PaymentHistoryRow = ({paymentHistory}) => {
  const formatStatus = (status) => {
    const statuses = {
      'accepted': '受付中',
      'processing': '手続中',
      'completed': '完了',
      'canceled': '取消済',
      'error': 'エラー',
      'other': 'その他'
    };

    return statuses[status];
  }

  return (
    <tr>
      <td className="c-l" data-name="受渡日">{formatDate(paymentHistory.delivery_date)}</td>
      <td className="c-l" data-name="種別">{paymentHistory.cash_transfer_type_name}</td>
      <td data-name="受渡金額">{renderAmount(paymentHistory.amount)}</td>
      <td data-name="状況">{formatStatus(paymentHistory.status)}</td>
    </tr>
  );
}

export default PaymentHistoryRow;