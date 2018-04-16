import React from 'react';
import PaymentHistoryRow from './PaymentHistoryRow';
import EmptyTableRow from '../../Authenticated/EmptyTableRow';

const PaymentHistoryList = ({paymentHistories}) => {
  const renderPaymentHistories = (paymentHistories) => {
    if (paymentHistories.length > 0) {
      return paymentHistories.map((item, key) => (
        <PaymentHistoryRow paymentHistory={item} key={key} />
      ));
    } else {
      return <EmptyTableRow message="明細がありませ" />;
    }
  }

  return (
    <table className="c-table_list">
      <thead>
        <tr>
          <th className="c-l">受渡日</th>
          <th className="c-l">種別</th>
          <th>受渡金額</th>
          <th>状況</th>
        </tr>
      </thead>
      <tbody>
        {renderPaymentHistories(paymentHistories)}
      </tbody>
    </table>
  );
}

export default PaymentHistoryList;