import React from 'react';
import { formatCurrency, formatDate } from '../../../utils';

const PaymentHistoryRow = ({paymentHistory}) => {
  const renderAmount = (amount) => {
    if (amount >= 0) {
      return `${formatCurrency(amount)}円`;
    } else {
      return <span className="u-minus">{formatCurrency(amount)}円</span>;
    }
  }

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
      <td className="c-l">{formatDate(paymentHistory.delivery_date)}</td>
      <td className="c-l">{paymentHistory.cash_transfer_type_name}</td>
      <td>{renderAmount(paymentHistory.amount)}</td>
      <td>{formatStatus(paymentHistory.status)}</td>
    </tr>
  );
}

export default PaymentHistoryRow;