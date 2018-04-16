import React from 'react';
import PaymentCancelRow from './PaymentCancelRow';
import EmptyTableRow from '../../Authenticated/EmptyTableRow';

const PaymentCancelList = ({payments}) => {
  const renderPayments = (payments) => {
    if (payments.length > 0) {
      return payments.map((item, key) => (
        <PaymentCancelRow payment={item} key={key} />
      ));
    } else {
      return <EmptyTableRow message="明細がありませ" />;
    }
  }

  return (
    <table className="c-table_list">
      <thead>
        <tr>
          <th className="c-action"></th>
          <th className="c-l">受渡日</th>
          <th className="c-l">種別</th>
          <th>受渡金額</th>
        </tr>
      </thead>
      <tbody>
        {renderPayments(payments)}
      </tbody>
    </table>
  );
}

export default PaymentCancelList;