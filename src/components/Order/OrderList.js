import React from 'react';
import OrderRow from './OrderRow';
import EmptyTableRow from '../Authenticated/EmptyTableRow';

const OrderList = ({orders}) => {
  const renderOrders = (orders) => {
    if (orders.length > 0) {
      return orders.map((item, key) => (
        <OrderRow order={item} key={key} />
      ));
    } else {
      return <EmptyTableRow message="明細はありません。" />;
    }
  }

  return (
    <table className="c-table_list">
      <thead>
        <tr>
          <th className="c-action"></th>
          <th className="c-l">銘柄コード</th>
          <th className="c-l">銘柄</th>
          <th className="c-l">区分</th>
          <th className="c-l">発注時間</th>
          <th>取引数量</th>
          <th className="c-l">（出来済）</th>
          <th className="c-l">取引状況</th>
          <th className="c-l">取引条件</th>
          <th className="c-l">有効期限</th>
        </tr>
      </thead>
      <tbody>
        {renderOrders(orders)}
      </tbody>
    </table>
  )
}

export default OrderList;